/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    const arrCombinado = []

    let i = 0, j = 0

    // Mientras haya elementos en alguno de los dos arrays, continúa el loop
    while (i < arrA.length || j < arrB.length) {
        // Si A ya se termino, agrego lo que queda de B
        if (i >= arrA.length) {
            arrCombinado.push(arrB[j])
            j++
        // Si B ya se termino, agrego lo que queda de A
        } else if (j >= arrB.length) {
            arrCombinado.push(arrA[i])
            i++
        // Se agrega si el elemento actual de A es menor que el de B
        } else if (arrA[i] < arrB[j]) {
            arrCombinado.push(arrA[i])
            i++
         // Se agrega si el elemento actual de B es menor que el de A
        } else if (arrB[j] < arrA[i]) {
            arrCombinado.push(arrB[j])
            j++
        // Caso que ambos valores sean iguales, agrega el valor del arrayA solamente y avanza ambos indices
        } else {
            arrCombinado.push(arrA[i])
            i++
            j++
        }
    }
    return arrCombinado
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let arrCombinado = []
    for (const arr of arrs) {
        arrCombinado = combinarDosArrays(arrCombinado, arr)
    }
    return arrCombinado
}

// exportar ambas funciones
export default {
    combinarDosArrays,combinarNArrays
}