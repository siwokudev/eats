//let xhr = new XMLHttpRequest();

function productAjax(){
	
	//alert("funcionando");
	
	var btnCreate = document.querySelector("#btnCrearProducto");
		btnCreate.onclick = createProductRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualProducto");
		btnReadIndividual.onclick = readIndividualProductRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralProducto");
		btnReadGeneral.onclick = readGeneralProductRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarProducto");
		btnUpdate.onclick = updateProductRequest;
		
	var btnDelete = document.querySelector("#btnBorrarProducto");
		btnDelete.onclick = deleteProductRequest;
	
}

function createProductRequest(){
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
	xhr.onload = callBackCreateProduct();
	xhr.send(null);
	
}

function readIndividualProductRequest(){
	//alert("leer individual");
	xhr.open("GET","ProductoServlet");
	//xhr.open("POST","LeerProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualProduct;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralProductRequest(){
	//alert("leer general");
	xhr.open("GET","ProductoServlet");
	//xhr.open("POST","LeerGeneralProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralProduct;
	xhr.send(null);
}

function updateProductRequest(){
	//alert("actualizar");
	xhr.open("PUT","ProductoServlet");
	//xhr.open("POST","ActualizarProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateProduct;
	xhr.send(null);
}

function deleteProductRequest(){
	//alert("borrar");
	xhr.open("DELETE","ProductoServlet");
	//xhr.open("POST","BorrarProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteProduct;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateProduct(){
	alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualProduct(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralProduct(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateProduct(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteProduct(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ProductoResultado").innerHTML = xhr.responseText;
	}
}