document.addEventListener('DOMContentLoaded', () => {
    const tbodyAcoes = document.getElementById('tbody-acoes');
    const filePath = 'acoes-listadas-b3.csv';
    let dadosAcoes = [];

    // Função para carregar os dados do CSV
    async function carregarDados() {
        const response = await fetch(filePath);
        const data = await response.text();
        const linhas = data.split('\n').slice(1); // Remover cabeçalho e dividir por linhas

        const promises = linhas.map(async (linha) => {
            const [ativo] = linha.split(','); // Extrair o ativo da linha

            // Requisição para API com o ativo
            const url = `https://brapi.dev/api/quote/${ativo}?token=k5Jogh6gCD1m7Ut7rUMMQ1`;
            const resposta = await fetch(url);
            const json = await resposta.json();

            const acao = json.results[0];
            return {
                ativo,
                varPercentual: parseFloat(acao.regularMarketChangePercent),
                acao
            };
        });

        dadosAcoes = await Promise.all(promises);
        dadosAcoes.sort((a, b) => b.varPercentual - a.varPercentual);
        exibirDados(dadosAcoes);
    }

    function exibirDados(dados) {
        tbodyAcoes.innerHTML = '';
        dados.forEach(dado => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${dado.ativo}</td>
                <td><img src="${dado.acao.logourl}" alt="${dado.acao.shortName}" width="50"></td>
                <td>R$ ${dado.acao.regularMarketPrice}</td>
                <td>R$ ${dado.acao.regularMarketPreviousClose}</td>
                <td>R$ ${dado.acao.regularMarketChange}</td>
                <td>${dado.acao.regularMarketChangePercent}%</td>
                <td>R$ ${dado.acao.regularMarketVolume}</td>
                <td>R$ ${dado.acao.regularMarketOpen}</td>
                <td>${dado.acao.regularMarketTime}</td>
            `;
            tbodyAcoes.appendChild(newRow);
        });
    }

    function aplicarFiltros(minValue, maxValue) {
        const dadosFiltrados = dadosAcoes.filter(dado => dado.varPercentual >= minValue && dado.varPercentual <= maxValue);
        exibirDados(dadosFiltrados);
    }

    // Inicializar o noUiSlider
    const slider = document.getElementById('var-range');
    noUiSlider.create(slider, {
        start: [-10, 10],
        connect: true,
        range: {
            'min': -10,
            'max': 10
        },
        step: 0.1,
        tooltips: [true, true],
        format: {
            to: value => value.toFixed(1),
            from: value => parseFloat(value)
        }
    });

    slider.noUiSlider.on('update', (values, handle) => {
        const minValue = parseFloat(values[0]);
        const maxValue = parseFloat(values[1]);
        document.getElementById('min-value-display').textContent = `${minValue}%`;
        document.getElementById('max-value-display').textContent = `${maxValue}%`;
        aplicarFiltros(minValue, maxValue);
    });

    carregarDados();
});
