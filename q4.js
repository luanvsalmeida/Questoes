const faturamento = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53
};

// Calcula o total de faturamento
const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Calcula o percentual de cada estado
const percentuais = Object.entries(faturamento).map(([estado, valor]) => {
    const percentual = (valor / totalFaturamento) * 100;
    return { estado, percentual: percentual.toFixed(2) }; // Arredondar para duas casas decimais
});

// Exibe os resultados
percentuais.forEach(({ estado, percentual }) => {
    console.log(`O percentual de ${estado} é: ${percentual}%`);
});