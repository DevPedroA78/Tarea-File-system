
// SINTAXIS: fs.rmdir(path[, options], callback)
// Este metodo BORRA el DIRECTORIO indicado en el parametro PATH

const fs = require('fs')

fs.rmdir('images2', (error) => {
    if(error) {
        console.log('Error no se pudo borrar el directorio', error)
        return
    }
    console.log('Se borró exitosamente el directorio solicitado')
})