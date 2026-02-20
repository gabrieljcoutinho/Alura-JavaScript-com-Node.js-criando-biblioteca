const fs = require('fs')

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
   verificaPalavrasDuplicadas(texto)
})

//Criar um Array ed palavras com as palavras
//Contar as ocorrencias
//montar um objeto com o resultado

function verificaPalavrasDuplicadas(texto){

}