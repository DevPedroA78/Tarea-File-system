
// SINTAXIS: fs.writeFile(file, data[, options], callback)

const fs = require('fs')

fs.writeFile('creato.txt', 'Hola desde node :)', 'utf-8', (error) => {
    if(error) {
        console.log('Error: ', error)
        return
    }
    console.log('Archivo escrito exitosamente')
})



xxx

yyyyy
