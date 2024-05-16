const fs = require('node:fs');

try {
  const data = fs.readFileSync('./readfile.txt');
  fs.writeFileSync('./arquivo.txt', 'Hello world!', 'utf-8');

  console.log(data);
  console.log('Arquivo criado');
} catch (E) {
  throw new Error('Erro ao criar arquivo', E);
}
