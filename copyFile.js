
// SINTAXIS: fs.copyFile(src, dest[, mode], callback)
// Permite crear una copia del archivo que le indiquemos en SRC, asignando nuevo nombre con DEST.

const fs = require('fs')

fs.copyFile('creato.txt', 'creatorTwo.txt', (error) => {
    if(error) {
        console.log('Error de copiado del file original', error)
        return
    }
    console.log('Se copió existosamente el archivo original creato.text: ')
})