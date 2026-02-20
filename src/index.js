const fs = require('fs')

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
   verificaPalavrasDuplicadas(texto)
})

//Criar um Array ed palavras com as palavras
//Contar as ocorrencias
//montar um objeto com o resultado

// {
//     "web": 5,
//     "computador": 2
// }

function verificaPalavrasDuplicadas(texto){
        const listaPalavras = texto.split(' ');
        const resultado = {};
        // objeto[propriedade] = valor;

        listaPalavras.forEach(palavra => {
                resultado[]
        })

}