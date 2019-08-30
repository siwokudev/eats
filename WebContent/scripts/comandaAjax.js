var xhr = new XMLHttpRequest();

function comandaAjax(){
	
	//alert("funcionando Comandas Script");
	
	var btnCreate = document.querySelector("#btnCrearComanda");
		btnCreate.onclick = createComandaRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualComanda");
		btnReadIndividual.onclick = readIndividualComandaRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralComanda");
		btnReadGeneral.onclick = readGeneralComandaRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarComanda");
		btnUpdate.onclick = updateComandaRequest;
		
	var btnDelete = document.querySelector("#btnBorrarComanda");
		btnDelete.onclick = deleteComandaRequest;
	
}

function createComandaRequest(){
	alert("crear request");
	
	xhr.open("POST","ComandaServlet");
	//xhr.open("POST","CrearComandaServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateComanda();
	//xhr.send(miFormulario);
	xhr.send(null);
	
}

function readIndividualComandaRequest(){
	//alert("leer individual");
	xhr.open("GET","ComandaServlet");
	//xhr.open("POST","LeerComandaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualComanda;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralComandaRequest(){
	//alert("leer general");
	xhr.open("GET","ComandaServlet");
	//xhr.open("POST","LeerGeneralComandaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralComanda;
	xhr.send(null);
}

function updateComandaRequest(){
	//alert("actualizar");
	xhr.open("PUT","ComandaServlet");
	//xhr.open("POST","ActualizarComandaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateComanda;
	xhr.send(null);
}

function deleteComandaRequest(){
	//alert("borrar");
	xhr.open("DELETE","ComandaServlet");
	//xhr.open("POST","BorrarComandaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteComanda;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateComanda(){
	alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#ComandaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualComanda(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ComandaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralComanda(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ComandaResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateComanda(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ComandaResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteComanda(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#ComandaResultado").innerHTML = xhr.responseText;
	}
}