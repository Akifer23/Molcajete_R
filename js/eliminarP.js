var usuarios = JSON.parse(localStorage.getItem("usuarios"))

usuarios.forEach((element)=>{

	document.querySelector(".contenedorU").innerHTML+=`      
<style>

td, th,  table{
  
  text-align: center;
  padding: 8px;
}

</style>

<div class="container mt-2 my-2 text-center">
			<div class="row">
				<div class="col-1">
					
					
				</div>
				<div class="col-10 text-center">
					
	<table class=" table table-responsive table-hover text-center">
	<tr>

	<th>Correo</th>
	<th>Nombre</th>
	<th>Contraseña</th>

	</tr>

	<tr>
		<td>${element.correo}</td>

		<td>${element.nombre}</td>

		<td>${element.contraseña}</td>

	</tr>
	<tr>		
	</tr>
    <tr>
    	    </tr>
	</table>
					
				</div>
				<div class="col-1">
				</div>
			</div>
		</div>
`
	
});


function eliminarU(){

	var correoI = prompt("Ingrese el correo")

	var enc= usuarios.filter(element=>element.correo == correoI)
	var index =usuarios.indexOf(enc)

	usuarios.splice(index, 1)

	console.log(usuarios)

	localStorage.setItem("usuarios", JSON.stringify(usuarios))
}












var productos = JSON.parse(localStorage.getItem("productos"))

productos.forEach((element2)=>{

	document.querySelector(".contenedorP").innerHTML+=`      



<style>

td, th,  table{
  
  text-align: center;
  padding: 8px;
}

</style>

<div class="container mt-2 my-2 text-center">
			<div class="row">
				<div class="col-1">
					
					
				</div>
				<div class="col-10 text-center">
					
	<table class=" table table-responsive table-hover text-center">
	<tr>

	<th>Nombre</th>
	

	</tr>

	<tr> 


	<td>${element2.nombre}</td>
	</tr>


	<tr>

		
	</tr>
    
    <tr>
    	    </tr>
    

	

	</table>
					
				</div>
				<div class="col-1">
				</div>
			</div>
		</div>


`
	
});


function eliminarP(){

	var nombreP = prompt("Ingrese el nombre del producto")

	var enc2= productos.filter(element2=>element2.correo == nombreP)
	var index2 =productos.indexOf(enc2)

	productos.splice(index2, 1)

	console.log(productos)

	localStorage.setItem("productos", JSON.stringify(productos))
}












