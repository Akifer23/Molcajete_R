var nombrep = document.getElementById('nombrep');
var preciop = document.getElementById('preciop');
var desc = document.getElementById('desc');
var productos = [];

window.addEventListener('load',()=>{
	productos= JSON.parse(localStorage.getItem('productos'));

	if (productos===null) {
		productos=[];
	}
	
} )

function obtImg() {
	var file = document.querySelector('input[type=file]').files[0];
	var leer = new FileReader();
	leer.readAsDataURL(file);

	leer.addEventListener('load', () => {localStorage.setItem('imgTemp', leer.result)})


}
function registro() {
	var objeto ={
		nombre:nombrep.value,
		desc:desc.value,
		precio:preciop.value,
		imagen: localStorage.getItem('imgTemp')
	}
	//console.log(objeto)


	localStorage.removeItem('imgTemp');

	productos.push(objeto);
	alert('El producto se registro correctamente')
	localStorage.setItem('productos', JSON.stringify(productos));
	var form = document.getElementById('form')
	form.reset()
}