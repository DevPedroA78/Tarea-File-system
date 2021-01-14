
// SINTAXIS: fs.appendFile(path, data[, options], callback)
// CONCATENA el contendio de este archivo al FINAL del original 

const fs = require('fs')

fs.appendFile('creato.txt', 'Hola desde el file de de appendFile.', 'utf-8', (error) => {
    if(error) {
        console.log('Error de appendFile: ', error)
        return
    }
    console.log('Se hizó appendFile exitoso')
})