var caracteresValidos = /[^ÑA-Z-,]/g;
var caracteresNoValidos = /^,|,(?=,)/g;
var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayCaracteresUnicos = [];

function enviar(){
    var valor = document.querySelector('.entrada').value;
    var validar = validacion(valor);
    if(validar==true){
        alert("Validacion aceptda");
        var textoDividido = dividirTexto(valor);
        alert(textoDividido);
        var tamañoArray = textoDividido.length;
        for(i = 0; i < tamañoArray; i++){
            contadorCaracteresUnicos(textoDividido,i);
        }
        alert(arrayCaracteresUnicos);
    }else{
        alert("Validacion rechazada")
        //location.reload();
    }
}
/*
La validacion recarga la pagina porque sino obtenia
un error muy raro, no es la solucion optima, pero funciona:
Si introduces un valor "erroneo" lo va  rechazar, pero si
vuelves a introducir un valor erroneo cuya longitud coincida con n-1
siendo n el numero de veces que has introducido un valor erroneo, lo aprueba xd.
Ejemplo: Introduzco "zzz", "zazazaza", "rrr" y "xdx"
normalmente rechazaria "xdx" por no estar en mayusculas
pero como he introducido 4 veces un valor erroneo lo aprueba xd.
*/
function validacion(valor){
    var validacionComas = caracteresNoValidos.test(valor);
    if(valor==""){
        alert("Introduce texto para continuar")
    }else if(validacionComas==false){
        alert("Las comas estan bien");
        var validacionCaracteres = caracteresValidos.test(valor);
            if(validacionCaracteres==false){
                alert("El texto esta bien");
                validacionFinal = true;
            }else{
                alert("Introduce caracteres validos");
                document.querySelector('.entrada').value = "";
                validacionFinal = false;
            }
    }else{
        alert("No empieces con una coma y no la utilices dos veces seguidas sin una palabra de por medio");
        document.querySelector('.entrada').value = "";
        validacionFinal = false;
    }
    return validacionFinal;
}

function dividirTexto(valor){
    var textoDividido = valor.split(",");
    return textoDividido;
}

function contadorCaracteresUnicos(array, i){
    let caracteresUnicos = new Set(array[i]);
    arrayCaracteresUnicos[i] = caracteresUnicos.size;
}