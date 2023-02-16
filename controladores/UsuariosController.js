// var modelUsuarios = require(__dirname + '/../modelos/modelUsuarios').usuarios

var modelUsuarios = require(__dirname + '/../modelos/modelUsuarios').usuarios
// var usuariosController = {

// }



// usuariosController.Guardar = function(request,response){

//     var post ={
//         cedula:request.body.cedula,
//         nombre:request.body.nombre,
//         edad:request.body.edad
//     }

//     if(post.nombre == ""|| post.nombre == null || post.nombre == undefined ){
//         response.json({state:false,mensaje:"El campo name es obligatorio"})
//         return false 
//     }
    
//     if(post.cedula == ""|| post.cedula == null || post.cedula == undefined ){
//         response.json({state:false,mensaje:"El campo cedula es obligatorio"})
//         return false 
//     }

//     if(post.edad == ""|| post.edad == null || post.edad == undefined ){
//         response.json({state:false,mensaje:"El campo edad es obligatorio"})
//         return false 
//     }

//     if(post.nombre.length < 4 ){

//         response.json({state:false,mensaje:"El campo name debe ser superior a 4 caracteres"})
//         return false 
//     }

//     if(post.nombre.length > 20 ){

//         response.json({state:false,mensaje:"El campo name debe ser inferior a 20 caracteres"})
//         return false 

//     }
   
//     modelUsuarios.Guardar(post,function(respuesta){
//         response.json(respuesta)

//     })

    


// }

// usuariosController.ListarUsuarios = function(request,response){
//     modelUsuarios.ListarUsuarios(null,function(resp){
//     response.json(resp)
// })
// }
// usuariosController.ActualizarCedula = function(request,response){
//     var post ={
//         cedula:request.body.cedula,
//         edad:request.body.edad
//     }

//     if(post.cedula == "" || post.cedula ==undefined || post.cedula == null){
//         response.json({state:false,mensaje:"el campo cedula es obligacion"})
//         return false
//     }

//     if(post.edad == "" || post.edad ==undefined || post.edad == null){
//         response.json({state:false,mensaje:"el campo edad es obligacion"})
//         return false
//     }
//     var posicion = datos.findIndex((item) => item.cedula == post.cedula)

//     if(posicion == -1){
//         response.json({state:false,mensaje: "Esta Cedula No Existe"})
//         return false
//     }

//     post.posicion = posicion 

//     modelUsuarios.ActualizarCedula(post,function(respuesta){
//         response.json(respuesta)

//     })
//     //datos [posicion].edad = post.edad

    


// }

// usuariosController.BorrarCedula = function (request,response){
//     var post ={
//         cedula:request.body.cedula,
      
//     }

//     if(post.cedula == "" || post.cedula ==undefined || post.cedula == null){
//         response.json({state:false,mensaje:"el campo cedula es obligacion"})
//         return false
//     }

    
//     var posicion = datos.findIndex((item) => item.cedula == post.cedula)

//     if(posicion == -1){
//         response.json({state:false,mensaje: "Esta Cedula No Existe"})
//         return false
//     }

//     modelUsuarios.BorrarCedula(posicion,function(respuesta){
//         response.json(respuesta)
//     })
//     response.jsom()

// }

// module.exports.usuario = usuariosController


var usuariosController = {

}

usuariosController.Guardar = function(request,response){

    var post = {
        cedula:request.body.cedula,
        nombres:request.body.nombres,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        edad:request.body.edad,
        estadocivil:request.body.estadocivil

    }

    if(post.cedula == "" || post.cedula == null ||  post.cedula == undefined ){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false
    }

    if(post.cedula.length < 5){
        response.json({state:false,mensaje:"La cedula no es validad, debe tener minimo 6 digitos"})
        return false
    }


    if(post.nombres == "" || post.nombres == null ||  post.nombres == undefined ){
        response.json({state:false,mensaje:"El campo nombres es obligatorio"})
        return false
    }

    if(post.apellidos == "" || post.apellidos == null ||  post.apellidos == undefined ){
        response.json({state:false,mensaje:"El campo apellidos es obligatorio"})
        return false
    }

    if(post.direccion == "" || post.direccion == null ||  post.direccion == undefined ){
        response.json({state:false,mensaje:"El campo direccion es obligatorio"})
        return false
    }
    if(post.telefono == "" || post.telefono == null ||  post.telefono == undefined ){
        response.json({state:false,mensaje:"El campo telefono es obligatorio"})
        return false
    }
    if(post.edad == "" || post.edad == null ||  post.edad == undefined ){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }
    if(post.estadocivil == "" || post.estadocivil == null ||  post.estadocivil == undefined ){
        response.json({state:false,mensaje:"El campo estado civil es obligatorio"})
        return false
    }
 

    modelUsuarios.Guardar(post,function(respuesta){

        response.json(respuesta)

    })
    
    
   
}

usuariosController.ListarClientes = function(request,response){
    modelUsuarios.ListarClientes(null,function(respuesta){
        response.json(respuesta)
    })
    
}

usuariosController.Modificar = function(request,response){
    var post = {
         Id:request.body.Id,
        cedula:request.body.cedula,
        nombres:request.body.nombres,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        edad:request.body.edad,
        estadocivil:request.body.estadocivil
    }

    if(post.Id == "" || post.Id == null || post.Id == undefined){
        response.json({state:false,mensaje:"El campo Id es obligatorio"})
        return false 
    }

    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false 
    }

    if(post.nombres == "" || post.nombres == null ||  post.nombres == undefined ){
        response.json({state:false,mensaje:"El campo nombres es obligatorio"})
        return false
    }

    if(post.apellidos == "" || post.apellidos == null ||  post.apellidos == undefined ){
        response.json({state:false,mensaje:"El campo apellidos es obligatorio"})
        return false
    }

    if(post.direccion == "" || post.direccion == null ||  post.direccion == undefined ){
        response.json({state:false,mensaje:"El campo direccion es obligatorio"})
        return false
    }
    if(post.telefono == "" || post.telefono == null ||  post.telefono == undefined ){
        response.json({state:false,mensaje:"El campo telefono es obligatorio"})
        return false
    }
    if(post.edad == "" || post.edad == null ||  post.edad == undefined ){
        response.json({state:false,mensaje:"El campo edad es obligatorio"})
        return false
    }
    if(post.estadocivil == "" || post.estadocivil == null ||  post.estadocivil == undefined ){
        response.json({state:false,mensaje:"El campo estado civil es obligatorio"})
        return false
    }

    //  var posicion = datos.findIndex((item)=> item.cedula == post.cedula)
     
    // if(posicion == -1){
    //     response.json ({state:false,mensaje:"Esta cedula no Existe"})
    //     return false
    // }

    // post.posicion = posicion

    modelUsuarios.Modificar(post,function(respuesta){
        response.json (respuesta)
    })
 

   
}

usuariosController.Eliminar = function(request,response){
    var post = {
        cedula:request.body.cedula
       
    }

    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state:false,mensaje:"El campo cedula es obligatorio"})
        return false 
    }

    

     var posicion = datos.findIndex((item)=> item.cedula == post.cedula)

     if(posicion == -1){
        response.json({state:false,mensaje:"No Existe esta Cedula"})
        return false
     }

    
     modelUsuarios.Eliminar(posicion,function(respuesta){
        response.json (respuesta)
     })

     

}

module.exports.usuario = usuariosController 


