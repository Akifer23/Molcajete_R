
var admin = {
    correo: "admin@correo.com",
    contraseña: btoa("admin123"),
    nombre: "Armando",
    apellidos: "Suarez",
    telefono: "4651358699"
}


var usuarios =[];

window.addEventListener('DOMContentLoaded', validaUsuario());


function validaUsuario (){
    var local = JSON.parse(localStorage.getItem('usuarios'))

    if (local== null){
        localStorage.setItem('usuarios', JSON.stringify([admin]) )
    }

    else{
        usuarios=local;
    }   
    
}   

var txtusuarios =  document.getElementById('txtusuario1')
var txtcontra =  document.getElementById('txtcontra1')

function login(){
    //usuarios =  JSON.parse(localStorage.getItem('usuarios'))
    
    const respuesta = usuarios.find(datos=>datos.correo===txtusuarios.value)
    

   if(respuesta){
        if (respuesta.contraseña === btoa(txtcontra.value)) {
            alert(`Bienvenido ${respuesta.nombre}`)
            if(respuesta.correo == "admin@correo.com"){
                console.log('aqui')
            window.location="index.html"
            }
            else{
                console.log('aqui2')
            window.location="pagina1.html"
            }
        }else{
            alert("Usuario no registrado")
        }
   }
}