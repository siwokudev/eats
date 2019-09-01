var xhr = new XMLHttpRequest();

window.onload = function(){
	tipoProductoAjax();
}

function tipoProductoAjax(){
	
	//alert("funcionando TipoProductos Script");
	
	var btnCreate = document.querySelector("#btnCrearTipoProducto");
		btnCreate.onclick = createTipoProductoRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualTipoProducto");
		btnReadIndividual.onclick = readIndividualTipoProductoRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralTipoProducto");
		btnReadGeneral.onclick = readGeneralTipoProductoRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarTipoProducto");
		btnUpdate.onclick = updateTipoProductoRequest;
		
	var btnDelete = document.querySelector("#btnBorrarTipoProducto");
		btnDelete.onclick = deleteTipoProductoRequest;
	
}

function createTipoProductoRequest(){
	xhr.open("POST","TipoProductoServlet");
	//xhr.setRequestHeader("Content-Type", "text/html")
	
	var formulario = new FormData();
	var tipo = document.getElementById("txtTipo").value;
	formulario.append("txtTipo",tipo);

	xhr.onload = callBackCreateTipoProducto;
	xhr.send(formulario);
}

function readIndividualTipoProductoRequest(){
	var id = document.getElementById("txtId").value;
	xhr.open("GET","TipoProductoServlet"+"?"+"txtId="+id);
	
	xhr.onload = callBackReadIndividualTipoProducto;
	xhr.send(null); //body del reques, solo para post
}

function readGeneralTipoProductoRequest(){
	//alert("leer general");
	xhr.open("GET","TipoProductoServlet");
	xhr.onload = callBackReadGeneralTipoProducto;
	xhr.send(null);
}

function updateTipoProductoRequest(){
	//alert("actualizar");
	xhr.open("PUT","TipoProductoServlet");
	var formulario = new FormData();
	var id = document.getElementById("txtIdUpdate").value;
	var tipo = document.getElementById("txtNewTipo").value;
	formulario.append("txtId",id);
	formulario.append("txtTipo",tipo);

	xhr.onload = callBackCreateTipoProducto;
	xhr.send(formulario);
}

function deleteTipoProductoRequest(){
	//alert("borrar");
	xhr.open("DELETE","TipoProductoServlet");
	var formulario = new FormData();
	var id = document.getElementById("txtIdDelete").value;
	formulario.append("txtId",id);
	xhr.onload = callBackDeleteTipoProducto;
	xhr.send(formulario);
}

//-------------  Call Back Function --------------

function callBackCreateTipoProducto(){
	//alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#TipoProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualTipoProducto(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralTipoProducto(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateTipoProducto(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteTipoProducto(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoProductoResultado").innerHTML = xhr.responseText;
	}
}