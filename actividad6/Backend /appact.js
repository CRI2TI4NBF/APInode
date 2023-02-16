var express = require('express')
global.app = express()
global.datos = [];
var bodyparse = require('body-parser')
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))
global.config = require(__dirname + '/config.js').config



//Esto seria para configurar las cabeceras - 
// app.all('*',function(request,response,next){


//     var whitelist = request.headers.origin;
//     //console.log(whitelist)
//     response.header('Access-Control-Allow-Origin',whitelist)
//     response.header("Access-Control-Allow-Crecentials","true");


//     next()
// })

app.all('*',function(request,response,next){ 
    var whitelist = request.headers.origin;
 
    response.header('Access-Control-Allow-Origin', whitelist) 
    //response.header('Access-Control -Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD'); 
    //response.header('Access-Control-Allow-Headers', "authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); 
    response.header("Access-Control-Allow-Credentials", "true"); 
    
    next() 
})


var cors = require('cors')// cross origin resource sharing

app.use(cors({
    origin:function(origin,callback){
        console.log(origin)
        if(!origin)return callback(null,true)
        
            
            
        if(config.listablanca.indexOf(origin) === -1){
            return callback('Error cors',false)
        }
        return callback(null,true)

    }
   
}))

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



// Actividad Numero - 5 (tambien hace parte de la actividad -6)

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

    if(posicion == -1){
        response.json ({state:false,mensaje:"Esta cedula no Existe"})
        return false
    }

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



// require(__dirname + '/routes.js')



// app.listen(config.puerto, function(){
//     console.log('servidor funcionando por el puerto:' + config.puerto)

// })









