var contenido=document.getElementById('productos');
function mostrardatos(){
	productos.forEach(info =>{
		contenido.innerHTML += `

<div class="col d-flex justify-content-center mb-4">
		<div class="card shadow mb-1  rounded" style="width: 20rem;">
			<h5 class="card-title pt-2 text-center text-primary">${info.nombre}</h5>
			<img src="${info.imagen}" class="card-img-top" alt="...">
			<div class="card-body">
				<p class="card-text  description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<h5 class="text-primary">Precio: <span class="precio">${info.precio}</span></h5>
				<div class="d-grid gap-2">
					<button  class="btn btn-primary button">Añadir a Carrito</button>
				</div>
			</div>
		</div>
	</div>
`
	})
}
var productos=[];

window.addEventListener('load', ()=>{
	productos=JSON.parse(localStorage.getItem('productos'));

	if (productos===null) {
		alert('no hay productos que mostrar')
		productos=[];
	}
	else{
		mostrardatos();
	}
})

