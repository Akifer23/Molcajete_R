var usuario = document.querySelector('#txtcorreo')
var nombre = document.querySelector('#txtnombre')
var apellido = document.querySelector('#txtapellido')
var contraseña = document.getElementsByTagName('#txtpass')
var  telefono = document.querySelector('#txttelefono')

var usuarios = []

window.addEventListener('DOMContentLoaded', validaUsuario());

function validaUsuario(){
    usuarios = JSON.parse (localStorage.getItem('usuarios'));

}   


function registrar(){
    var objeto={
    correo: txtcorreo.value,
    contraseña: btoa(txtpass.value),
    nombre: txtnombre.value,
    apellidos: txtapellido.value,
    telefono: txttelefono.value
    }
 
    
    
    usuarios.push(objeto);
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('El registro se realizo correctamente')
    var form = document.getElementById('form')
    form.reset()
 }