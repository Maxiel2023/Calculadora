


function addToDisplay(value){ 

      document.getElementById("pantalla").value += value

}

function calcular(){
	var pantalla = document.getElementById("pantalla").value
	var resultado = eval(pantalla)
	document.getElementById("pantalla").value = resultado
}

function limpiarPantalla(){
    document.getElementById("pantalla").value = ` `
}