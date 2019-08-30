var xhr = new XMLHttpRequest();

function productoAjax(){
	
	//alert("funcionando Productos Script");
	
	var btnCreate = document.querySelector("#btnCrearProducto");
		btnCreate.onclick = createProductoRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualProducto");
		btnReadIndividual.onclick = readIndividualProductoRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralProducto");
		btnReadGeneral.onclick = readGeneralProductoRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarProducto");
		btnUpdate.onclick = updateProductoRequest;
		
	var btnDelete = document.querySelector("#btnBorrarProducto");
		btnDelete.onclick = deleteProductoRequest;
	
}

function createProductoRequest(){
	alert("crear request");
	
	xhr.open("POST","ProductoServlet");
	//xhr.open("POST","CrearProductoServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateProducto();
	xhr.send(null);
	
}

function readIndividualProductoRequest(){
	//alert("leer individual");
	xhr.open("GET","ProductoServlet");
	//xhr.open("POST","LeerProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualProducto;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralProductoRequest(){
	//alert("leer general");
	xhr.open("GET","ProductoServlet");
	//xhr.open("POST","LeerGeneralProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralProducto;
	xhr.send(null);
}

function updateProductoRequest(){
	//alert("actualizar");
	xhr.open("PUT","ProductoServlet");
	//xhr.open("POST","ActualizarProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateProducto;
	xhr.send(null);
}

function deleteProductoRequest(){
	//alert("borrar");
	xhr.open("DELETE","ProductoServlet");
	//xhr.open("POST","BorrarProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteProducto;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateProducto(){
	alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualProducto(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralProducto(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateProducto(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteProducto(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}