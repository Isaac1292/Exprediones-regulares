function validar_contraseña() { 

    var m = document.getElementById("expresion").value;
    var expreg = /^[A-Z]{1}[0-9]{1,3}[a-z]{1,3}\W{1,3}$/
    if(expreg.test(m))
      alert("La contraseña ingresada es correcta"); 
    else 
      alert("La contraseña ingresada es incorrecta"); 
  } 

function ventanaNueva(documento){	
	window.open(documento,'nuevaVentana','width=300, height=400');
}