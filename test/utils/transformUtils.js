import transformUtils from "../../src/utils/transformUtils.js"
import util from "../util.js"
function runAll() {
    console.log("INICIO - Test Transform Utils")
    util.espacioUno()
    testTransformarStringEnArrayDeNumeros()
    testTransformarArrayDeNumerosAUnSoloString()
    util.espacioUno()
    console.log("FIN - Test Transform Utils")
}

function testTransformarStringEnArrayDeNumeros() {
    console.log("-----TEST 1: transformar string en array de numeros -------")
    const str = "123 | 456 | 789 | 1bc | 10"
    const separador = "|"
    const arrNumeros = transformUtils.transformarStringEnArrayDeNumeros(str, separador)
    const arrEsperado = [123, 456, 789, 10]

    if (typeof arrNumeros === 'object' && util.arraysIguales(arrNumeros, arrEsperado)) {
        util.printOk("TEST OK");
    } else {
        util.printError("ERROR");
    }
    util.separador()
}
function testTransformarArrayDeNumerosAUnSoloString() {
    console.log("-----TEST 2: transformar Array de numeros a un solo String -------")
    const arr = [1, 2, 3, 4, 5, 6]
    const separador = ";"

    const strConvertido = transformUtils.transformarArrayDeNumerosAUnSoloString(arr, separador)
    const strEsperado = "1;2;3;4;5;6"

    if (strConvertido === strEsperado) {
        util.printOk("TEST OK");
    } else {
        util.printError("ERROR");
    }
    util.separador()
}


export default { runAll }
