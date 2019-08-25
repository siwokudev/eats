//let xhr = new XMLHttpRequest();

function tipoBebidaAjax(){
	/*
	var btnCreate = document.querySelector("#btnCrearTipoBebida");
		btnCreate.onclick = createDrinkTypeRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualtipoBebida");
		btnReadIndividual.onclick = readIndividualDrinkTypeRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneraltipoBebida");
		btnReadGeneral.onclick = readGeneralDrinkTypeRequest;
		
	var btnUpdate = document.querySelector("#btnActualizartipoBebida");
		btnUpdate.onclick = updateDrinkTypeRequest;
		
	var btnDelete = document.querySelector("#btnBorrartipoBebida");
		btnDelete.onclick = deleteDrinkTypeRequest;
	*/
}

function createDrinkTypeRequest(){
	alert("crear request");
	
	xhr.open("POST","CreartipoBebidaServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateDrinkType();
	xhr.send(null);
	
}

function readIndividualDrinkTypeRequest(){
	//alert("leer individual");
	xhr.open("POST","LeertipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualDrinkType;
	xhr.send(null);
}

function readGeneralDrinkTypeRequest(){
	//alert("leer general");
	xhr.open("POST","LeerGeneraltipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralDrinkType;
	xhr.send(null);
}

function updateDrinkTypeRequest(){
	//alert("actualizar");
	xhr.open("POST","ActualizartipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateDrinkType;
	xhr.send(null);
}

function deleteDrinkTypeRequest(){
	//alert("borrar");
	xhr.open("POST","BorrartipoBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteDrinkType;
	xhr.send(null);
}

//--------- Call Back Functions -----------------

function callBackCreateDrinkType(){
	if(xhr.status == 200){
		alert("Creado Call back" + xhr.reponseText);
		//document.querySelector("#resultadoPotencia").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualDrinkType(){
	if(xhr.status == 200){
		alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
	}
}

function callBackReadGeneralDrinkType(){
	if(xhr.status == 200){
		alert("Leido General" + xhr.reponseText);
		//presentado de informacion
	}
}

function callBackUpdateDrinkType(){
	if(xhr.status == 200){
		alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
	}
}

function callBackDeleteDrinkType(){
	if(xhr.status == 200){
		alert("Borrado" + xhr.reponseText);
		//presentado de informacion
	}
}