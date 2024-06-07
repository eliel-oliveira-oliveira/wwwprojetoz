function consultarAcao() {
    const ativo = document.getElementById('ativo').value.toUpperCase();
    const token = 'k5Jogh6gCD1m7Ut7rUMMQ1';
    const url = `https://brapi.dev/api/quote/${ativo}?token=${token}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const resultadoDiv = document.getElementById('resultado');
        const acao = data.results[0];

        resultadoDiv.innerHTML = `
            <h2>${acao.shortName}</h2>
            <p><strong>Preço atual:</strong> R$ ${acao.regularMarketPrice}</p>
            <p><strong>Fechamento anterior:</strong> R$ ${acao.regularMarketPreviousClose}</p>
            <p><strong>Variação:</strong> R$ ${acao.regularMarketChange} (${acao.regularMarketChangePercent}%)</p>
            <p><strong>Volume:</strong> ${acao.regularMarketVolume}</p>
            <p><strong>Abertura:</strong> R$ ${acao.regularMarketOpen}</p>
            <p><strong>Variação de 52 semanas:</strong> R$ ${acao.fiftyTwoWeekLow} - R$ ${acao.fiftyTwoWeekHigh}</p>
            <img src="${acao.logourl}" alt="${acao.shortName}">
        `;
    })
    .catch(error => {
        console.error('Erro ao consultar ação:', error);
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<p>Erro ao consultar ação. Verifique se o código do ativo está correto.</p>`;
    });
}
