const fs = require('fs')

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
   verificaPalavrasDuplicadas(texto)
})

//Criar um Array ed palavras com as palavras

function verificaPalavrasDuplicadas(texto){

}