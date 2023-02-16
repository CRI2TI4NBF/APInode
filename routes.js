// var usuariosController = require(__dirname + '/controladores/UsuariosController.js').usuario

var usuariosController = require (__dirname + '/controladores/UsuariosController.js').usuario

// //Create
// app.post("/Usuarios/Guardar",function(request,response){
//     usuariosController.Guardar(request,response)
// })
// //Read
// app.post("/Usuarios/ListarUsuarios",function(request,response){
//     usuariosController.ListarUsuarios(request,response)
// })
// //Update
// app.post("/Usuarios/ActualizarCedula",function(request,response){
//     usuariosController.ActualizarCedula(request, response)
// })
// //Delete
// app.post("/Usuarios/BorrarCedula",function(request,response){
//     usuariosController.BorrarCedula(request,response)
// })




app.post("/Cliente/Guardar",function(request,response){
usuariosController.Guardar(request,response)
    
})

app.post("/Cliente/ListarClientes",function(request,response){
    usuariosController.ListarClientes(request,response)
})

app.post("/Cliente/Modificar",function(request,response){
    usuariosController.Modificar(request,response)

})

app.post("/Cliente/Eliminar",function(request,response){
     usuariosController.Eliminar(request,response)
   
})




