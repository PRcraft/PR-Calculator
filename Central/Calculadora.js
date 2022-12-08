function insert(numero){

var visor = document.getElementById("visor").innerHTML;
document.getElementById("visor").innerHTML = visor + numero;
}
function clean(){
    document.getElementById("visor").innerHTML = "";
}
function Calcular(){
    var resultado = document.getElementById("visor").innerHTML;
    if(resultado){
        document.getElementById("visor").innerHTML = eval(resultado);
    }
}