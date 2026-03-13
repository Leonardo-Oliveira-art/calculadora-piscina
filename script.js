function calcularPiscina(){

let comprimento = parseFloat(document.getElementById("comprimento").value);
let largura = parseFloat(document.getElementById("largura").value);
let profMin = parseFloat(document.getElementById("profMin").value);
let profMax = parseFloat(document.getElementById("profMax").value);

if(isNaN(comprimento) || isNaN(largura) || isNaN(profMin) || isNaN(profMax)){

document.getElementById("resultado").innerHTML =
"Preencha todos os campos corretamente.";

return;

}

/* profundidade média */

let profMedia = (profMin + profMax) / 2;

/* volume */

let volume = comprimento * largura * profMedia;

/* litros */

let litros = volume * 1000;

/* área aproximada de vinil */

let fundo = comprimento * largura;

let lateraisMaiores = comprimento * profMedia * 2;

let lateraisMenores = largura * profMedia * 2;

let areaVinil = fundo + lateraisMaiores + lateraisMenores;


/* resultado */

document.getElementById("resultado").innerHTML =

"<b>Volume da piscina</b><br>" +
volume.toFixed(2) + " m³<br>" +

litros.toFixed(0) + " litros<br><br>" +

"<b>Metragem aproximada de vinil</b><br>" +
areaVinil.toFixed(2) + " m²";

}
