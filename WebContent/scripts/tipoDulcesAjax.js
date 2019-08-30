var xhr = new XMLHttpRequest();

function tipoDulcesAjax(){
	
	//alert("funcionando TipoDulcess Script");
	
	var btnCreate = document.querySelector("#btnCrearTipoDulces");
		btnCreate.onclick = createTipoDulcesRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualTipoDulces");
		btnReadIndividual.onclick = readIndividualTipoDulcesRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralTipoDulces");
		btnReadGeneral.onclick = readGeneralTipoDulcesRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarTipoDulces");
		btnUpdate.onclick = updateTipoDulcesRequest;
		
	var btnDelete = document.querySelector("#btnBorrarTipoDulces");
		btnDelete.onclick = deleteTipoDulcesRequest;
	
}

function createTipoDulcesRequest(){
	alert("crear request");
	
	xhr.open("POST","TipoDulcesServlet");
	//xhr.open("POST","CrearTipoDulcesServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateTipoDulces();
	xhr.send(null);
	
}

function readIndividualTipoDulcesRequest(){
	//alert("leer individual");
	xhr.open("GET","TipoDulcesServlet");
	//xhr.open("POST","LeerTipoDulcesServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualTipoDulces;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralTipoDulcesRequest(){
	//alert("leer general");
	xhr.open("GET","TipoDulcesServlet");
	//xhr.open("POST","LeerGeneralTipoDulcesServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralTipoDulces;
	xhr.send(null);
}

function updateTipoDulcesRequest(){
	//alert("actualizar");
	xhr.open("PUT","TipoDulcesServlet");
	//xhr.open("POST","ActualizarTipoDulcesServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateTipoDulces;
	xhr.send(null);
}

function deleteTipoDulcesRequest(){
	//alert("borrar");
	xhr.open("DELETE","TipoDulcesServlet");
	//xhr.open("POST","BorrarTipoDulcesServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteTipoDulces;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateTipoDulces(){
	alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#TipoDulcesResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualTipoDulces(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoDulcesResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralTipoDulces(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoDulcesResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateTipoDulces(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoDulcesResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteTipoDulces(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoDulcesResultado").innerHTML = xhr.responseText;
	}
}