
// SINTAXIS: fs.unlink(path, callback)
// Remueve el archivo que le indiquemos con el path

const fs = require('fs')

fs.unlink('creato.txt', (error, data) => {
    if(error) {
        console.log('Error, no funciono unlink:', error)
    }
    console.log('Se removió exitosamente el file con UNLINK', data)
})