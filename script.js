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

/* potência da bomba */

let bomba;

if (volume <= 24) {
  bomba = "1/4 CV";
} 
else if (volume <= 24,8) {
  bomba = "1/3 CV";
} 
else if (volume <= 46,4) {
  bomba = "1/2 CV";
} 
else if (volume <= 72,8) {
  bomba = "3/4 CV";
} 
else if (volume <= 96,0) {
  bomba = "1 CV";
} 
else if (volume <= 125,6) {
  bomba = "1.5 CV";
} 
else if (volume <= 152,0) {
  bomba = "2 CV";
} 
else {
  bomba = "Consultar projeto hidráulico";
}

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

"<b>Potência sugerida da bomba</b><br>" +
bomba + "<br><br>" +

"<b>Metragem aproximada de vinil</b><br>" +
areaVinil.toFixed(2) + " m²";

}
