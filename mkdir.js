
// SINTAXIS: fs.mkdir(path[, options], callback)
// Crea un NUEVO DIRECTORIO, con el PATH indicamos nombre y con

const fs = require('fs')

fs.mkdir('images', (error) => {
    if(error) {
        console.log('Error al crear directorio con MKDIR: ', error)
        return
    }
    console.log('Se creo de forma existosa el directorio IMAGES')
})
