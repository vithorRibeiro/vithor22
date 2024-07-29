const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        botoes.forEach((btn) => btn.classList.remove("ativo"));
        textos.forEach((texto) => texto.classList.remove("ativo"));
        botao.classList.add("ativo");
        textos[i].classList.add("ativo");
    });
});

const contadores = document.querySelectorAll(".contador");
const tempos = [
    new Date("2024-10-05T00:00:00"),
    new Date("2024-12-05T00:00:00"),
    new Date("2024-13-30T00:00:00"),
    new Date("2024-14-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;

    const segundos = Math.floor((tempoFinal / 1000) % 60);
    const minutos = Math.floor((tempoFinal / 1000 / 60) % 60);
    const horas = Math.floor((tempoFinal / 1000 / 60 / 60) % 24);
    const dias = Math.floor(tempoFinal / 1000 / 60 / 60 / 24);

    if (tempoFinal > 0) {
        return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
    } else {
        return "Prazo Finalizado";
    }
}

function atualizaCronometro() {
    contadores.forEach((contador, i) => {
        contador.textContent = calculaTempo(tempos[i]);
    });
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
comecaCronometro();
