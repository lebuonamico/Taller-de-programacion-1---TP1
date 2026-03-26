import fileUtils from '../src/utils/fileUtils.js'
import transformUtils from '../src/utils/transformUtils.js'
import apareo from '../src/apareo.js'

const separador = ','
// leo los 4 archivos a memoria
const setA = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
const setB = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
const setC = fileUtils.leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
const setD = fileUtils.leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

// preparo los 4 arrays a partir de los archivo leidos
const arrA = transformUtils.transformarStringEnArrayDeNumeros(setA, separador)
const arrB = transformUtils.transformarStringEnArrayDeNumeros(setB, separador)
const arrC = transformUtils.transformarStringEnArrayDeNumeros(setC, separador)
const arrD = transformUtils.transformarStringEnArrayDeNumeros(setD, separador)


// combino los primeros dos arrays
const dosArrComb = apareo.combinarDosArrays(arrA, arrB)
const textoCombinadoDosArr = transformUtils.transformarArrayDeNumerosAUnSoloString(dosArrComb, separador)
fileUtils.escribirTextoEnArchivo('./test/out/combinadoTest.out', textoCombinadoDosArr, true)

// combino los cuatro arrays
const nArrComb = apareo.combinarNArrays([arrA, arrB, arrC, arrD])
const textoCombinadoNArr = transformUtils.transformarArrayDeNumerosAUnSoloString(nArrComb, separador)
fileUtils.escribirTextoEnArchivo('./test/out/combinado2Test.out', textoCombinadoNArr, true)
