var xhr = new XMLHttpRequest();

function tipoBebidaAjax(){
	
	//alert("funcionando TipoBebidas Script");
	
	var btnCreate = document.querySelector("#btnCrearTipoBebida");
		btnCreate.onclick = createTipoBebidaRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualTipoBebida");
		btnReadIndividual.onclick = readIndividualTipoBebidaRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralTipoBebida");
		btnReadGeneral.onclick = readGeneralTipoBebidaRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarTipoBebida");
		btnUpdate.onclick = updateTipoBebidaRequest;
		
	var btnDelete = document.querySelector("#btnBorrarTipoBebida");
		btnDelete.onclick = deleteTipoBebidaRequest;
	
}

function createTipoBebidaRequest(){
	alert("crear request");
	
	xhr.open("POST","TipoBebidaServlet");
	//xhr.open("POST","CrearTipoBebidaServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateTipoBebida();
	xhr.send(null);
	
}

function readIndividualTipoBebidaRequest(){
	//alert("leer individual");
	xhr.open("GET","TipoBebidaServlet");
	//xhr.open("POST","LeerTipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualTipoBebida;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralTipoBebidaRequest(){
	//alert("leer general");
	xhr.open("GET","TipoBebidaServlet");
	//xhr.open("POST","LeerGeneralTipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralTipoBebida;
	xhr.send(null);
}

function updateTipoBebidaRequest(){
	//alert("actualizar");
	xhr.open("PUT","TipoBebidaServlet");
	//xhr.open("POST","ActualizarTipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateTipoBebida;
	xhr.send(null);
}

function deleteTipoBebidaRequest(){
	//alert("borrar");
	xhr.open("DELETE","TipoBebidaServlet");
	//xhr.open("POST","BorrarTipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteTipoBebida;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateTipoBebida(){
	alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#TipoBebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualTipoBebida(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoBebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralTipoBebida(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoBebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateTipoBebida(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoBebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteTipoBebida(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#TipoBebidaResultado").innerHTML = xhr.responseText;
	}
}