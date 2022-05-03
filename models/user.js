const {mongoose} = require("../config/db")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

const userModel = mongoose.model("User", userSchema)

// * Implementar modelo de usuario

module.exports = userModel