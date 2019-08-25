//let xhr = new XMLHttpRequest();

function bebidaAjax(){
	/*
	var btnCreate = document.querySelector("#btnCrearBebida");
		btnCreate.onclick = createDrinkRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualBebida");
		btnReadIndividual.onclick = readIndividualDrinkRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralBebida");
		btnReadGeneral.onclick = readGeneralDrinkRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarBebida");
		btnUpdate.onclick = updateDrinkRequest;
		
	var btnDelete = document.querySelector("#btnBorrarBebida");
		btnDelete.onclick = deleteDrinkRequest;
	*/
}

function createDrinkRequest(){
	alert("crear request");
	
	xhr.open("POST","CrearBebidaServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateDrink();
	xhr.send(null);
	
}

function readIndividualDrinkRequest(){
	//alert("leer individual");
	xhr.open("POST","LeerBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualDrink;
	xhr.send(null);
}

function readGeneralDrinkRequest(){
	//alert("leer general");
	xhr.open("POST","LeerGeneralBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralDrink;
	xhr.send(null);
}

function updateDrinkRequest(){
	//alert("actualizar");
	xhr.open("POST","ActualizarBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateDrink;
	xhr.send(null);
}

function deleteDrinkRequest(){
	//alert("borrar");
	xhr.open("POST","BorrarBebidaServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteDrink;
	xhr.send(null);
}

function callBackCreateDrink(){
	if(xhr.status == 200){
		alert("Creado Call back");
		document.querySelector("#BebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualDrink(){
	if(xhr.status == 200){
		alert("Leido individual");
		document.querySelector("#BebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralDrink(){
	if(xhr.status == 200){
		alert("Leido General");
		document.querySelector("#BebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateDrink(){
	if(xhr.status == 200){
		alert("Actualizado");
		document.querySelector("#BebidaResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteDrink(){
	if(xhr.status == 200){
		alert("Borrado");
		document.querySelector("#BebidaResultado").innerHTML = xhr.responseText;
	}
}