const fs = require('fs')

const createFile = () => fs.writeFile('./WRITEFILE.txt', text, 'utf-8')

createFile()