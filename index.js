const express = require("express")
const { port } = require("./config")
const { connection } = require("./config/db")

//IMPORTANDO ROUTES
const users = require("./routes/users")

connection()


const app = express()

//MIDDLEWARE JSON   
app.use(express.json())

//USANDO ROUTES
users(app)

app.listen(port,()=>{
    console.log("Escuchando: http://localhost:" + port)
})