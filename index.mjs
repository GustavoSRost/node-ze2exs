import { createFile, deleteFile, showFile, updateFile } from './functions.mjs';

async function start() {
  try {
    await createFile(
      'Conteúdo inicial do arquivo\nCriado com o módulo fs do Node.js'
    );

    console.log(await showFile());
    console.log('--------------');

    await updateFile('Conteúdo modificado...');

    console.log(await showFile());
    console.log('--------------');

    await deleteFile();
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

start();
