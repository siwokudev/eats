var xhr = new XMLHttpRequest();

function usuarioAjax(){
	
	//alert("funcionando Usuarios Script");
	
	var btnCreate = document.querySelector("#btnCrearUsuario");
		btnCreate.onclick = createUsuarioRequest;
		
	var btnReadIndividual = document.querySelector("#btnLeerIndividualUsuario");
		btnReadIndividual.onclick = readIndividualUsuarioRequest;
		
	var btnReadGeneral = document.querySelector("#btnLeerGeneralUsuario");
		btnReadGeneral.onclick = readGeneralUsuarioRequest;
		
	var btnUpdate = document.querySelector("#btnActualizarUsuario");
		btnUpdate.onclick = updateUsuarioRequest;
		
	var btnDelete = document.querySelector("#btnBorrarUsuario");
		btnDelete.onclick = deleteUsuarioRequest;
	
}

function createUsuarioRequest(){
	alert("crear request");
	
	xhr.open("POST","UsuarioServlet");
	//xhr.open("POST","CrearUsuarioServlet");
	/*
	var miFormulario = new FormData();
	var miBase = document.getElementById("txtBase").value;
	var miExponente = document.getElementById("txtExponente").value;
	
	miFormulario.append("txtBase",miBase);
	miFormulario.append("txtExponente",miExponente);
	*/
	xhr.onload = callBackCreateUsuario();
	xhr.send(null);
	
}

function readIndividualUsuarioRequest(){
	//alert("leer individual");
	xhr.open("GET","UsuarioServlet");
	//xhr.open("POST","LeerUsuarioServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadIndividualUsuario;
	xhr.send(null); //aquí va el parametro?
}

function readGeneralUsuarioRequest(){
	//alert("leer general");
	xhr.open("GET","UsuarioServlet");
	//xhr.open("POST","LeerGeneralUsuarioServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackReadGeneralUsuario;
	xhr.send(null);
}

function updateUsuarioRequest(){
	//alert("actualizar");
	xhr.open("PUT","UsuarioServlet");
	//xhr.open("POST","ActualizarUsuarioServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackUpdateUsuario;
	xhr.send(null);
}

function deleteUsuarioRequest(){
	//alert("borrar");
	xhr.open("DELETE","UsuarioServlet");
	//xhr.open("POST","BorrarUsuarioServlet");
	//procesado de informacion aquí
	//
	xhr.onload = callBackDeleteUsuario;
	xhr.send(null);
}

//-------------  Call Back Function --------------

function callBackCreateUsuario(){
	alert("Esperando Respuesta");
	if(xhr.status == 200){
		//alert("Creado Call back" + xhr.reponseText);
		document.querySelector("#UsuarioResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadIndividualUsuario(){
	if(xhr.status == 200){
		//alert("Leido individual" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#UsuarioResultado").innerHTML = xhr.responseText;
	}
}

function callBackReadGeneralUsuario(){
	if(xhr.status == 200){
		//alert("Leido General" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#UsuarioResultado").innerHTML = xhr.responseText;
	}
}

function callBackUpdateUsuario(){
	if(xhr.status == 200){
		//alert("Actualizado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#UsuarioResultado").innerHTML = xhr.responseText;
	}
}

function callBackDeleteUsuario(){
	if(xhr.status == 200){
		//alert("Borrado" + xhr.reponseText);
		//presentado de informacion
		document.querySelector("#UsuarioResultado").innerHTML = xhr.responseText;
	}
}