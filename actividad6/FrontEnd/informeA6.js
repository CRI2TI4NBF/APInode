var basedatos = []


var limpiar = function(){

    document.getElementById('cedula').value = ""
    document.getElementById('nombres').value = ""
    document.getElementById('apellidos').value = ""
    document.getElementById('direccion').value = ""
    document.getElementById('telefono').value = ""
    document.getElementById('edad').value = ""
    document.getElementById('estadocivil').value = ""
}

// var mostrar = function(){





// var datos = document.getElementById("datos")
// datos.innerHTML = " "


// for (let a = 0; a < basedatos.length a++)


// datos.innerHTML = datos.innerHTML + 
// "<div class= 'item'>"+
// "<div class= 'nombres'>"+ basedatos[a].nombres +"<div/>"+
// "<div class= 'apellidos'>"+ basedatos[a].apellidos + "<div/>"+
// "<div class= 'direccion'>"+ basedatos[a].direccion + "<div/>"+
// "<div class= 'telefono'>"+ basedatos[a].telefono + "<div/>"+
// "<div class= 'edad'>"+ basedatos[a].edad + "<div/>"+
// "<div class= 'estadocivil'>"+ basedatos[a].estadocivil + "<div/>"+
// "<div/>"
     

// }

var ClienteGuardar = function(){

    var cedula = document.getElementById('cedula').value
    var nombres = document.getElementById('nombres').value
    var apellidos = document.getElementById('apellidos').value
    var direccion = document.getElementById('direccion').value
    var telefono = document.getElementById('telefono').value
    var edad = document.getElementById('edad').value
    var estadocivil = document.getElementById('estadocivil').value

    
    
    // WARNING: For POST requests, body is set to null by browsers.
    var data = "cedula="+cedula+"&nombres="+nombres+"&apellidos="+apellidos+"&direccion="+direccion+"&telefono="+telefono+"&edad="+edad+"&estadocivil="+estadocivil+"";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }

    });
    xhr.open("POST", "http://localhost:3000/Cliente/Guardar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);



    basedatos.push({cedula:cedula,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,edad:edad,estdocivil:estadocivil});
    localStorage.setItem("base",JSON.stringify(basedatos));
    // var mensaje = document.getElementById('mensaje')
    // mensaje.innerHTML = "<div class='alert alert-success' role='alert'>Registro exito</div>"


    limpiar()
    

}

var ClienteListarCliente = function (){

  
// WARNING: For POST requests, body is set to null by browsers.
var data = "";


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3000/Cliente/ListarClientes");
console.log(data)
xhr.send(data);
console.log(ClienteListarCliente)




}
 


var ClienteModificar = function(){

    var cedula = document.getElementById('cedula').value ;
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var edad = document.getElementById('edad').value;
    var estadocivil = document.getElementById('estadocivil').value;

// WARNING: For POST requests, body is set to null by browsers.
var data = "cedula="+cedula+"&nombres="+nombres+"&apellidos="+apellidos+"&direccion="+direccion+"&telefono="+telefono+"&edad="+edad+"&estadocivil="+estadocivil+"";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3000/Cliente/Modificar");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);

   
}

var ClienteEliminar = function(){

    var cedula = document.getElementById('cedula').value;

    // WARNING: For POST requests, body is set to null by browsers.
var data = "cedula="+cedula+"";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
     console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3000/Cliente/Eliminar");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);


}

// var cargardatos = function(){
//     var misdatos = localStorage.getItem("base")
//     if(misdatos == null){
//         basedatos = []
//     }
//     else{ 
//         basedatos = JSON.parse(misdatos)
//     }

//     var posicion = basedatos.findIndex((item) => item.cedula ) 
//     console.log(posicion)
    
//     var mensaje = document.getElementById('mensaje')
//     if(position == -1){
//         mensaje.innerHTML = "<div class='alert alert-danger' role='alert'>Registro invalido</div>"
//     }
//     else{
//     mensaje.innerHTML = "<div class='alert alert-success' role='alert'>Registro exitoso"+ basedatos[posicion].name+"</div>"
// }


// cargardatos()
// }