import fileUtils from "../../src/utils/fileUtils.js"
import util from "../util.js"
import fs from 'fs'

const rutaInexistente = './noExisteCarpeta/noExiste.out'
const rutaExistente = './noExiste.out'
const textoEjemplo = "TEST"

function runAll() {
    console.log("INICIO - Test File Utils")

    testLeerArchivoComoString1()
    testLeerArchivoComoString2()

    testEscribirTextoEnArchivo1()
    testEscribirTextoEnArchivo2()
    testEscribirTextoEnArchivo3()
    testEscribirTextoEnArchivo4()
    testEscribirTextoEnArchivo5()


    console.log("FIN - Test File Utils")
}

function testLeerArchivoComoString1() {
    util.espacioUno()
    console.log("-----TEST 1: leer archivo desde una ruta invalida-------")
    try {
        fileUtils.leerArchivoComoString(rutaInexistente)
        util.printError("ERROR en test")
    } catch (error) {
        util.printOk("TEST OK")
    }
    util.separador()
}

function testLeerArchivoComoString2() {
    console.log("-----TEST 2: leer archivo desde una ruta valida-------")
    const ruta = './in/10NumerosOrdenadosEntre1y50(setA).in'
    const datosEsperados = '2,4,6,7,24,29,30,35,45,50'
    try {
        if (datosEsperados === fileUtils.leerArchivoComoString(ruta)) {
            util.printOk("TEST OK")
        } else {
            util.printError("ERROR en test, los datos no coinciden")
        }
    } catch (error) {
        util.printError("ERROR en test")
    }
    util.separador()
}

function testEscribirTextoEnArchivo1() {
    console.log("-----TEST 3: error al intentar crear archivo en ruta inexistente-------")
    const shouldCreateIfNotExists = true
    try {
        fileUtils.escribirTextoEnArchivo(rutaInexistente, textoEjemplo, shouldCreateIfNotExists)
        util.printError("ERROR en test")
    } catch (error) {
        util.printOk("TEST OK, error controlado: " + error)
    }
    util.separador()
}

function testEscribirTextoEnArchivo2() {
    console.log("-----TEST 4: error al escribir en un archivo NO existente en ruta existente -------")
    const shouldCreateIfNotExists = false
    try {
        fileUtils.escribirTextoEnArchivo(rutaExistente, textoEjemplo, shouldCreateIfNotExists)
        util.printError("ERROR en test")
    } catch (error) {
        util.printOk("TEST OK error controlado: " + error)
    }
    util.separador()
}
function testEscribirTextoEnArchivo3() {
    console.log("-----TEST 5: error al escribir en un archivo NO existente en ruta inexistente -------")
    const shouldCreateIfNotExists = false
    try {
        fileUtils.escribirTextoEnArchivo(rutaInexistente, textoEjemplo, shouldCreateIfNotExists)
        util.printError("ERROR en test")
    } catch (error) {
        util.printOk("TEST OK error controlado: " + error)
    }
    util.separador()
}

function testEscribirTextoEnArchivo4() {
    console.log("-----TEST 6: escribir en ruta valida creando archivo nuevo -------")
    const shouldCreateIfNotExists = true
    try {
        fileUtils.escribirTextoEnArchivo(rutaExistente, textoEjemplo, shouldCreateIfNotExists)
        if (fileUtils.leerArchivoComoString(rutaExistente) === textoEjemplo) {
            util.printOk("TEST OK")
            /*Elimino el archivo creado*/
            fs.unlinkSync(rutaExistente);
        }
    } catch (error) {
        util.printError("ERROR en test")

    }
    util.separador()
}

function testEscribirTextoEnArchivo5() {
    /*Creo archivo para simular que ya existe*/
    fileUtils.escribirTextoEnArchivo(rutaExistente, textoEjemplo, true)

    console.log("-----TEST 7: escribir en ruta valida usando archivo ya existente -------")

    const shouldCreateIfNotExists = false

    try {
        fileUtils.escribirTextoEnArchivo(rutaExistente, textoEjemplo, shouldCreateIfNotExists)
        if (fileUtils.leerArchivoComoString(rutaExistente) === textoEjemplo) {
            util.printOk("TEST OK")
            /*Elimino el archivo creado*/
            fs.unlinkSync(rutaExistente);
        }
    } catch (error) {
        util.printError("ERROR en test")
    }
    util.separador()
}
export default { runAll }
