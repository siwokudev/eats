var xhr = new XMLHttpRequest();

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
	alert("crear request");
	
	xhr.open("POST","TipoProductoServlet");
	//xhr.open("POST","CrearTipoProductoServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateTipoProducto();
	xhr.send(null);
	
}

function readIndividualTipoProductoRequest(){
	//alert("leer individual");
	xhr.open("GET","TipoProductoServlet");
	//xhr.open("POST","LeerTipoProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualTipoProducto;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralTipoProductoRequest(){
	//alert("leer general");
	xhr.open("GET","TipoProductoServlet");
	//xhr.open("POST","LeerGeneralTipoProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralTipoProducto;
	xhr.send(null);
}

function updateTipoProductoRequest(){
	//alert("actualizar");
	xhr.open("PUT","TipoProductoServlet");
	//xhr.open("POST","ActualizarTipoProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateTipoProducto;
	xhr.send(null);
}

function deleteTipoProductoRequest(){
	//alert("borrar");
	xhr.open("DELETE","TipoProductoServlet");
	//xhr.open("POST","BorrarTipoProductoServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteTipoProducto;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateTipoProducto(){
	alert("Esperando Respuesta");
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