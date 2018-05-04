const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    idFB: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true}
})

const user = mongoose.model('users', userSchema)

module.exports = user