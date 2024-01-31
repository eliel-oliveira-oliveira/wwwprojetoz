// Se o seu JSON já for um objeto JavaScript
var jsonObj = {
        "audioFiles": [
            "AI CHAVE .mp3",
            "ANA PALHACO.mp3",
            "DESCULPAS.mp3",
            "DISCORD.mp3",
            "ELE FEZ DENOVO.mp3",
            "ME AJUDA.mp3",
            "ME FERREI.mp3",
            "MORENO .mp3",
            "RISADINHA.mp3",
            "TOGURO.mp3",
            "TOXIC.mp3",
            "VEADOS.mp3",
            "ZE DA MANGA.mp3",
        ]
    };

//console.log(jsonObj.audioFiles[1]); // Isso imprimirá a lista de arquivos de áudio no console

var audioEmExecucao;  // Variável global para armazenar o áudio em execução
var audio;
// Função para tocar o áudio
function playAudio(audio_id) {

    if (audioEmExecucao) {
        audioEmExecucao.pause();
    }

    audio = new Audio("audio/" + jsonObj.audioFiles[audio_id-1]);
    audioEmExecucao = audio;

    audio.addEventListener('ended', function() {
        audioEmExecucao = null;
    });

    audio.play();
    //alert("audio/" + jsonObj.audioFiles[audio_id-1]);
}
 
function pararaudio(){
    if (audioEmExecucao) {
        audioEmExecucao.pause();
    }
}

// Função para alterar o texto do Botão 1
function changeButtonText() {

    for (var i = 1; i <= 13; i++) {
        //ALTERAR O NOME DOS BOTOES
        document.getElementById('button' + i).innerText = jsonObj.audioFiles[i-1];
        document.getElementById('button' + i).disabled = false;
        document.getElementById('button' + i).style.backgroundColor = "#1c6325";
        document.getElementById('button' + i).style.cursor = "pointer";
    }

    document.getElementById('button20').style.backgroundColor = "#ac2424";
    document.getElementById('button20').style.cursor = "pointer";
    //document.getElementById('button20').style.backgroundColor = "a92121";
}


changeButtonText();

