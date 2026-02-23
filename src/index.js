const fs = require('fs')

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto)
//    verificaPalavrasDuplicadas(texto)
})

function quebraEmParagrafos(texto){
        const paragrafos = texto.toLowerCase().split('\n');
        const contagem = paragrafos.map((paragrafo) => {
                return verificaPalavrasDuplicadas(paragrafo)
        })
        console.log(contagem)
}

function limpaPalavras(){
                return palavra.replace(/[.,\/#!$%^&*;:{}=\-_`~()]º/g, '');
}

function verificaPalavrasDuplicadas(texto){
        const listaPalavras = texto.split(' ');
        const resultado = {};
        // objeto[propriedade] = valor;

        listaPalavras.forEach(palavra => {
                const palavraLimpa = limpaPalavras(palavra);
                resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        })

      return resultado

}