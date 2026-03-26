import fs from 'fs'

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta, 'utf-8')
    } catch (error) {
        console.log("Error al intentar leer un archivo como string: " + error.message);
    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    try {
        if (!fs.existsSync(ruta) && !shouldCreateIfNotExists) {
            throw new Error("el archivo no existe");
        }
        fs.writeFileSync(ruta, texto, 'utf-8');
    } catch (error) {
        console.log("Error al intentar escribir texto en un archivo: " + error.message);
    }
}

// exportar ambas funciones
export default { leerArchivoComoString, escribirTextoEnArchivo };
