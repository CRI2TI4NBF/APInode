var express = require('express')
var app = express()
var bodyparse = require('body-parser')
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))


/* app.all('*',function(request,response){


    var whitelist = request.headers.origin;
    console.log (whitelist)





}) */

//api 
/* app.get("/saludar",function(request,response){
    response.json({starte:true,mensaje:'Hola, como estas?'})
})
 */
// la peticion se conforma de dos cosas de un path y un dominio
//dominio : es el nombre de dominio que se le pone
//path : es la convinacion de datos que tu le pones, puede ser la que tu quieras 
/* app.get("/matematicas/suma/:num1/:num2",function(request,response){
    var total = parseInt(request.params.num1) + parseInt(request.params.num2)
    response.json({start:true,total:total})
})

app.get("/matematicas/multiplicacion/:num1/:num2",function(request,response){
    var total = parseInt(request.params.num1) * parseInt(request.params.num2)
    response.json({start:true,total:total})
})


// Api tipo post 
app.post("/matematicas/resta",function(request,response){
    var num1 = parseInt(request.body.num1)
    var num2 = parseInt(request.body.num2)
    var total = num1 - num2
   
    response.json({state:true,total})
})


// Api (mi practica)

app.get("/matematicas/divicion/:num1/:num2",function(request,response){
    var total = parseInt(request.params.num1) / parseInt(request.params.num2)
    response.json({start:true,total:total})
})

app.post("/tuedad/fechanacimiento/",function(request,response){
    var dato1 = parseInt(request.body.factual)
    var dato2 = parseInt(request.body.fnacido)
    var datof = dato1 - dato2

    response.json({start:true,datof}) 
})

app.post("/conteo/nombre",function(request,response){
    var nombr = parseInt(request.body.dato)
   
    console.log(nombr)
    response.json({start:true,nombr})
}) */

//Create
//Read
//Ud
//Delet
// un poco mas avanzado con el tema - seria informacion y completar datos 

var datos = [];
//Create
// app.post("/Usuarios/Guardar",function(request,response){

//     var post ={
//         cedula:request.body.cedula,
//         name:request.doby.name,
//         edad:request.body.edad
//     }

//     if(post.name == ""|| post.name == null || post.name == undefined ){
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

//     if(post.name.length < 4 ){

//         response.json({state:false,mensaje:"El campo name debe ser superior a 4 caracteres"})
//         return false 
//     }

//     if(post.name.length > 20 ){

//         response.json({state:false,mensaje:"El campo name debe ser inferior a 20 caracteres"})
//         return false 

//     }
   







//     datos.push(
//     {
//         nombre:post.name,
//         edad:post.edad,
//         cedeula:post.cedula

//     })
//     response.json({state:true,mesnaje:"Usuario Guardado"})



// })
// //Read
// app.post("/Usuario/ListarUsuarios",function(request,response){
//     response.json({state:true,datos:datos})
// })
// //Update
// app.post("/Usuarios/ActualizarCedula",function(request,response){
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
//     response.jsom({state:true,mensaje:"se Actualizo Correctamente"})



// })
// //Delete
// app.post("/Usuarios/BorrarCedula",function(request,response){
//     var post ={
//         cedula:request.body.cedula,
      
//     }

//     if(post.cedula == "" || post.cedula ==undefined || post.cedula == null){
//         response.json({state:false,mensaje:"el campo cedula es obligacion"})
//         return false
//     }

    
//     var posicion = datos.findIndex((item) => item.cedula == post.cedula)
//     datos.splice(posicion,1)

//     response.jsom({state:true,mensaje:"se Actualizo Correctamente"})



// })

//Actividad Numero - 5

var datos = [];

app.post("/Cliente/Guardar",function(request,response){

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
 

    datos.push({
        
        cedula:request.body.cedula,
        nombres:request.body.nombres,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        numero:request.body.telefono,
        edad:request.body.edad,
        estadocivil:request.body.estadocivil

    })
    response.json({state:true,mensaje:"Usuario Guardado"})
})

app.post("/Cliente/ListarClientes",function(request,response){
    response.json({state:true,datos:datos})
})

app.post("/Cliente/Modificar",function(request,response){
    var post = {
        cedula:request.body.cedula,
        nombres:request.body.nombres,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        edad:request.body.edad,
        estadocivil:request.body.estadocivil
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

     var posicion = datos.findIndex((item)=> item.cedula == post.cedula)

    

     datos[posicion].nombres = post.nombres
     datos[posicion].apellidos = post.apellidos
     datos[posicion].direccion = post.direccion
     datos[posicion].telefono = post.telefono
     datos[posicion].edad = post.edad
     datos[posicion].estadocivil = post.estadocivil


     response.json ({state:true,mensaje:"Sea Modificico Correctamente"})

})

app.post("/Cliente/Eliminar",function(request,response){

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

     datos.splice(posicion,1)


     response.json ({state:true,mensaje:"Eliminacion de Forma Exitosa"})

})



app.listen(3000, function(){
    console.log('servidor funcionando por el puerto:' + 3000)

})


