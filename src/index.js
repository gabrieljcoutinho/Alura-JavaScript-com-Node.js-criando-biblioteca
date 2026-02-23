const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

// Verificação de segurança para o caminho do arquivo
if (!link) {
    console.error("Erro: Você precisa informar o caminho do arquivo. Ex: node index.js arquivo.txt");
    process.exit();
}

fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.error("Erro ao ler o arquivo:", erro.message);
        return;
    }
    quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo);
    });
    console.log(contagem);
}

// Adicionado o parâmetro 'palavra' aqui
function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        // Removemos espaços extras com .trim() para evitar contagens vazias
        const palavraTratada = palavra.trim();

        if (palavraTratada.length >= 3) {
            const palavraLimpa = limpaPalavras(palavraTratada);
            // Verifica se após a limpeza a palavra ainda tem tamanho válido
            if (palavraLimpa.length >= 3) {
                resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
            }
        }
    });

    return resultado;
}