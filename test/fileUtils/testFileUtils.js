import fileUtils from "../../src/utils/fileUtils.js"
import util from "../util.js"
import fs from 'fs'
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
    const ruta = "noExiste"
    try {
        fileUtils.leerArchivoComoString(ruta)
        console.log("ERROR en test")
    } catch (error) {
        console.log("TEST OK")
    }
    util.separador()
}

function testLeerArchivoComoString2() {
    console.log("-----TEST 2: leer archivo desde una ruta valida-------")
    const ruta = './in/10NumerosOrdenadosEntre1y50(setA).in'
    const datosEsperados = '2,4,6,7,24,29,30,35,45,50'
    try {
        if (datosEsperados === fileUtils.leerArchivoComoString(ruta)) {
            console.log("TEST OK")
        } else {
            console.log("ERROR en test, los datos no coinciden")
        }
    } catch (error) {
        console.log("ERROR en test")
    }
    util.separador()
}

function testEscribirTextoEnArchivo1() {
    console.log("-----TEST 3: error al intentar crear archivo en ruta inexistente-------")
    const ruta = './noExisteCarpeta/noExiste.out'
    const texto = "TEST"
    const shouldCreateIfNotExists = true
    try {
        fileUtils.escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists)
        console.log("ERROR en test")
    } catch (error) {
        console.log("TEST OK, error controlado: " + error)
    }
    util.separador()
}

function testEscribirTextoEnArchivo2() {
    console.log("-----TEST 4: error al escribir en un archivo NO existente en ruta existente -------")
    const ruta = './noExiste.out'
    const texto = "TEST"
    const shouldCreateIfNotExists = false
    try {
        fileUtils.escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists)
        console.log("ERROR en test")
    } catch (error) {
        console.log("TEST OK, error controlado: " + error)
    }
    util.separador()
}
function testEscribirTextoEnArchivo3() {
    console.log("-----TEST 5: error al escribir en un archivo NO existente en ruta inexistente -------")
    const ruta = './noExisteCarpeta/noExiste.out'
    const texto = "TEST"
    const shouldCreateIfNotExists = false
    try {
        fileUtils.escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists)
        console.log("ERROR en test")
    } catch (error) {
        console.log("TEST OK, error controlado: " + error)
    }
    util.separador()
}

function testEscribirTextoEnArchivo4() {
    console.log("-----TEST 6: escribir en ruta valida creando archivo nuevo -------")
    const ruta = './noExiste.out'
    const texto = "TEST"
    const shouldCreateIfNotExists = true
    try {
        fileUtils.escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists)
        if(fileUtils.leerArchivoComoString(ruta)===texto){
            console.log("TEST OK")
        }
    } catch (error) {
        console.log("ERROR en test")
        
    }
    util.separador()
}

function testEscribirTextoEnArchivo5() {
    console.log("-----TEST 7: escribir en ruta valida usando archivo ya existente -------")
    const ruta = './noExiste.out'
    const texto = "TEST 2"
    const shouldCreateIfNotExists = false
    try {
        fileUtils.escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists)
        if(fileUtils.leerArchivoComoString(ruta)===texto){
            console.log("TEST OK")
            /*Elimino el archivo creado*/
            fs.unlinkSync(ruta);
        }
    } catch (error) {
        console.log("ERROR en test")
        
    }
    util.separador()
}
export default { runAll }
