
// SINTAXIS: fs.readdir(path[, options], callback)
// Permite LEER el contendio de un directorio especifico. 

const fs = require('fs')

fs.readdir('images', 'utf-8',(error, data) => {
    if(error) {
        console.log('Error al leer el directorio: ', error)
    }
    console.log('Se leyó exitosamente el directorio', data)
})