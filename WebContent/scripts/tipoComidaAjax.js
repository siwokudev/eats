var xhr = new XMLHttpRequest();

function tipoComidaAjax(){
	
	//alert("funcionando TipoComidas Script");
	
	var btnCreate = document.querySelector("#btnCrearTipoComida");
		btnCreate.onclick = createTipoComidaRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualTipoComida");
		btnReadIndividual.onclick = readIndividualTipoComidaRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralTipoComida");
		btnReadGeneral.onclick = readGeneralTipoComidaRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarTipoComida");
		btnUpdate.onclick = updateTipoComidaRequest;
		
	var btnDelete = document.querySelector("#btnBorrarTipoComida");
		btnDelete.onclick = deleteTipoComidaRequest;
	
}

function createTipoComidaRequest(){
	alert("crear request");
	
	xhr.open("POST","TipoComidaServlet");
	//xhr.open("POST","CrearTipoComidaServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateTipoComida();
	xhr.send(null);
	
}

function readIndividualTipoComidaRequest(){
	//alert("leer individual");
	xhr.open("GET","TipoComidaServlet");
	//xhr.open("POST","LeerTipoComidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualTipoComida;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralTipoComidaRequest(){
	//alert("leer general");
	xhr.open("GET","TipoComidaServlet");
	//xhr.open("POST","LeerGeneralTipoComidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralTipoComida;
	xhr.send(null);
}

function updateTipoComidaRequest(){
	//alert("actualizar");
	xhr.open("PUT","TipoComidaServlet");
	//xhr.open("POST","ActualizarTipoComidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateTipoComida;
	xhr.send(null);
}

function deleteTipoComidaRequest(){
	//alert("borrar");
	xhr.open("DELETE","TipoComidaServlet");
	//xhr.open("POST","BorrarTipoComidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteTipoComida;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateTipoComida(){
	alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#TipoComidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualTipoComida(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoComidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralTipoComida(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoComidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateTipoComida(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoComidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteTipoComida(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoComidaResultado").innerHTML = xhr.responseText;
	}
}