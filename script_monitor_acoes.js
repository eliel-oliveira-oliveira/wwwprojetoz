<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Ações da B3</title>
    <link rel="stylesheet" href="styles_monitor_acoes.css">
    <script src="auth.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.6.1/nouislider.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.6.1/nouislider.min.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Consulta de Ações</h1>
        <button class="logoff-button" onclick="logoff()">Logoff</button>
        <label for="ativo">Digite o código do ativo:</label>
        <input type="text" id="ativo" placeholder="Ex: PETR4">
        <button onclick="consultarAcao()">Consultar</button>
        <div id="resultado"></div>
    </div>

    <div class="container">
        <h1>Lista de Ações da B3</h1>
        <div class="filters">
            <label for="var-range">Variação (%)</label>
            <div id="var-range" class="noUiSlider"></div>
            <div class="range-values">
                <span id="min-value-display">-25%</span>
                &nbsp; a &nbsp;
                <span id="max-value-display">25%</span>
            </div>
        </div>

        <div class="table-container">
            <table id="acoes-table">
                <thead>
                    <tr>
                        <th>Ativo</th>
                        <th>Logo</th>
                        <th>Preço Atual</th>
                        <th>Fechamento Anterior</th>
                        <th>Variação R$</th>
                        <th>Variação %</th>
                        <th>Volume</th>
                        <th>Abertura</th>
                        <th>Regular Market Time</th>
                    </tr>
                </thead>
                <tbody id="tbody-acoes"></tbody>
            </table>
        </div>
    </div>

    <script src="script_consulta_unica.js"></script>
    <script src="script_monitor_acoes.js"></script>
</body>
</html>
