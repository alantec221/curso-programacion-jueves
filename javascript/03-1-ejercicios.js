//juan y pedro venden tomates, juan vendio 500 kilos y pedro 650
//cuantos kilos de tomates vendieron en total 
//cada kilo de tomate cuesta bs25
//responder las siguientes preguntas 
//1. cuantos kilos de tomates vendieron en total?
//2. cuanto dinero ganaron en total?
//3. cuanto dinero ganaron cada uno?

var juanKilos= 500;
var pedroKilos= 650;
var precioKilos= 25;
var kilosTotales= juanKilos+pedroKilos;
var dineroTotal= kilosTotales*precioKilos;
var dinerojuan= juanKilos*precioKilos;
var dineroPedro= pedroKilos*precioKilos;

console.log("1. juan y pedro vendieron en total:", kilosTotales, "kilos de tomate")
console.log("2. pedro y juan ganaron en total:", dineroTotal, "bs")
console.log("3. juan gano:", dinerojuan, "bs", "y pedro gano:", dineroPedro, "bs")