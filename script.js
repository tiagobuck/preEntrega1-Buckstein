let prestamo = parseInt(prompt("ingrese importe del prestamo solicitado"))
let cuotas = parseInt(prompt("ingrese cantidad de cuotas que desea"))
let interesChico = 1.1
let interesGrande = 1.25
let prestamoChico = prestamo / cuotas * interesChico
let prestamoGrande = prestamo / cuotas * interesGrande

for (let i = 0; i < cuotas; i++){
if (cuotas <= 0) {
    console.log("ERROR, ingrese un valor mayor a 0")
} else if(cuotas <= 12){
    console.log("cada cuota del prestamo es de:", prestamoChico)

}else if (cuotas > 12){
    console.log("cada cuota del prestamo es de:", prestamoGrande)
} else {console.log("ingrese un valor valido")}
}
