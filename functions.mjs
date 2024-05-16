import fs from 'node:fs';

const handleFileOperation = (operation, resolve, reject) => (error) => {
  if (error) {
    console.error(`Erro na operação ${operation}: ${error.message}`, error);
    reject(error);
  } else {
    console.log(`Operação de arquivo ${operation} concluída com sucesso!`);
    resolve();
  }
};

const createFile = (text) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      'meuarquivo.txt',
      text,
      handleFileOperation('write', resolve, reject)
    );
  });
};

const showFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      'meuarquivo.txt',
      'utf-8',
      handleFileOperation('read', resolve, reject)
    );
  });
};

const updateFile = (newText) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      'meuarquivo.txt',
      newText,
      handleFileOperation('update', resolve, reject)
    );
  });
};

const deleteFile = () => {
  return new Promise((resolve, reject) => {
    fs.unlink('meuarquivo.txt', handleFileOperation('delete', resolve, reject));
  });
};

export { createFile, showFile, updateFile, deleteFile };
