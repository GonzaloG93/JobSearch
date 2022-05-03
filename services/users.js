const userModel = require("../models/user")

class Users{
    async getAll(){

        try{
            const users = await userModel.find()
            //Ya tenemos disponibles los datos
            
            return users // Array de objetos
        }catch(error){
            console.log(error)
        }


     


    }

    async create(data){
        try{
            const users = await userModel.create(data)
            //Ya tenemos disponibles los datos
            
            return user // Objeto
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = Users