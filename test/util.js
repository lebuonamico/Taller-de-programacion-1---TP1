function espacioDos(){
console.log()
console.log()
}
function espacioUno(){
console.log()
}
function separador(){
console.log("--------------------------------------------------------")
espacioUno()
}

function printError(texto){
console.log("\x1b[31m%s\x1b[0m", texto); // rojo
}
function printOk(texto){
    console.log("\x1b[32m%s\x1b[0m", texto); // verde
}

export default{espacioUno,espacioDos,separador,printError,printOk}