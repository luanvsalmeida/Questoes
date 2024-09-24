const fs = require('fs');

// Função para calcular o faturamento
function calcularFaturamento(faturamento) {
    // Filtra os valores, ignorando os dias sem faturamento (0 ou null)
    const valoresFaturamento = faturamento.map(dia => dia.valor).filter(valor => valor > 0);

    const menorFaturamento = Math.min(...valoresFaturamento);
    const maiorFaturamento = Math.max(...valoresFaturamento);
    
    const totalFaturamento = valoresFaturamento.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = totalFaturamento / valoresFaturamento.length;

    const diasAcimaDaMedia = valoresFaturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Lendo o arquivo JSON
fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        const faturamentoData = JSON.parse(data); // Não há necessidade de acessar .faturamento
        const resultados = calcularFaturamento(faturamentoData);

        console.log(`Menor faturamento: ${resultados.menorFaturamento}`);
        console.log(`Maior faturamento: ${resultados.maiorFaturamento}`);
        console.log(`Dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`);
    } catch (parseErr) {
        console.error('Erro ao analisar JSON:', parseErr);
    }
});
