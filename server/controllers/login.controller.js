const user = require('../models/user.model')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

module.exports = {
    authenticationLogin(req, res){
        user.find({
            idFB: req.body.idFB
        })
         .exec()
         .then(users => {
             console.log(users)
             let Token = jwt.sign(req.body, process.env.Secret)
             if(users.length == 0){
                user.insertMany(req.body, (err, result) => {
                    if(!err){
                        res.status(200).json({
                            message: 'user data added',
                            token: Token
                        })
                    }else{
                        res.status(201).json({
                            message: 'Cant add user data to server'
                        })
                    }
                })
             }else{
                res.status(201).json({
                    token: Token
                })
             }
         })
         .catch(err => {
            console.log(err)
         })
    }
}