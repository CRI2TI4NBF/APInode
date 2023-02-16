// var modelUsuarios = {}
// //CRUD
var modelUsuarios = {}
// var datos = [];

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    cedula:String,
    nombres:String,
    apellidos:String,
    direccion:String,
    telefono:Number,
    edad:Number,
    estadocivil:String

})

const MyModel = mongoose.model('Personas',UserSchema)



modelUsuarios.Guardar = function(post,callback){

     const instancia = new MyModel
      instancia.cedula = post.cedula
      instancia.nombres = post.nombres
      instancia.apellidos = post.apellidos
      instancia.direccion = post.direccion
      instancia.telefono = post.telefono
      instancia.edad = post.edad
      instancia.estadocivil = post.estadocivil

      instancia.save((error,Usercreate)=> {
        if(error){
            console.log(error)
            return callback({state:false,mensaje:error})
        }
        else
        console.log(Usercreate)
        return callback({state:true,mensaje:Usercreate})
      })

    // datos.push({
        
    //     cedula:post.cedula,
    //     nombres:post.nombres,
    //     apellidos:post.apellidos,
    //     direccion:post.direccion,
    //     telefono:post.telefono,
    //     edad:post.edad,
    //     estadocivil:post.estadocivil

    // })

    // return callback({state:true,mensaje:"Usuario Guardado"})
}

// modelUsuarios.Guardar = function(post,callback){

//     datos.push(
//         {
//             nombre:post.nombre,
//             edad:post.edad,
//             cedula:post.cedula
    
//         })

//         return callback({state:true,mensaje:"Usuario Guardado"})
// }

// modelUsuarios.ListarUsuarios = function(post,callback){
//     return callback({state:true,datos:datos})
// }

// modelUsuarios.ActualizarCedula = function(post,callback){
//     datos [post.posicion].edad = post.edad
//     return callback({state:true,mensaje:"se Actualizo Correctamente"})
// }

// modelUsuarios.BorrarCedula = function(posicion,callback){
//     datos.splice(posicion,1)
//     return callback({state:true,mensaje:"se Actualizo Correctamente"})
// }
// module.exports.usuarios = modelUsuarios

modelUsuarios.ListarClientes = function(post,callback){
    // return callback({state:true,datos:datos})
    MyModel.find({},{_id:1,cedula:1,nombres:1,apellidos:1,direccion:1,telefono:1,edad:1,estadocivil:1},(error,documentos)=> {
       if(error){
        return callback({state:false,mensaje:error})
       }
       else
       return callback({state:true,mensaje:'lista personas',data:documentos})
    })
}


modelUsuarios.Modificar = function(post,callback){

    
    // datos[post.posicion].nombres = post.nombres
    // datos[post.posicion].apellidos = post.apellidos
    // datos[post.posicion].direccion = post.direccion
    // datos[post.posicion].telefono = post.telefono
    // datos[post.posicion].edad = post.edad
    // datos[post.posicion].estadocivil = post.estadocivil


    // return callback({state:true,mensaje:"Se Modificico Correctamente"})


    MyModel.find({cedula:post.cedula},{},(error,documentos)=> {
        if(error){
         return callback({state:false,mensaje:error})
        }
        else
            if(documentos.lenght > 0 ){

              
        MyModel.findByIdAndUpdate(documentos[0]._id,
        {
            nombres:post.nombres,
            apellidos:post.apellidos,
            direccion:post.direccion,
            telefono:post.telefono,
            edad:post.edad,
            estadocivil:post.estadocivil
        },(error,usuariomodificado) =>{
            if(error){
                console.log(error)
                return callback({state:false,mensaje:error})
            }

            else 
            return callback({state:true,mensaje:'Usuario Modificado',data:usuariomodificado})
        })

            }
        return callback({state:true,mensaje:'la cedula no Existe'})
     })






}

modelUsuarios.Eliminar = function(posicion,callback){
    datos.splice(posicion,1)

    return callback({state:true,mensaje:"Eliminacion de Forma Exitosa"})
}


module.exports.usuarios = modelUsuarios