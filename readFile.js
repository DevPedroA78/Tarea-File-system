
// SINTAXIS: fs.readFile(path[, options], callback)

const fs = require('fs')

fs.readFile('creato.txt', 'utf-8',(error, data) => {
    if(error) {
        console.log('Error no se realizó readFile: ', error)
    }
    console.log('Se leyó existosamente el archivo', data)
})