const gamebox = document.querySelector("#game_box");
const caras = document.querySelectorAll(".cara");
const escolhas = document.querySelectorAll(".escolha");
const caixaDeEscolha = document.querySelector(".caixa_de_escolha");
const caraEscolhida = document.querySelector(".cara_escolhida");

const emojis = [
  "😀",
  "😂",
  "🤩",
  "😎",
  "🥳",
  "😭",
  "😡",
  "🥶",
  "🤯",
  "😴",
  "😈",
  "🤖",
  "🤡",
  "👽",
  "👻",
  "🤐",
  "🤢",
  "😇",
  "🤣",
  "🥱",
  "😵‍💫",
  "🤑",
  "🤒",
  "😍",
];

function init() {
  escolhas.forEach((campo, index) => {
    campo.innerHTML = emojis[index];
  });

  caras.forEach((campo, index) => {
    campo.innerHTML = emojis[index];
  });

  caraEscolhida.addEventListener("click", () => {
    if (caixaDeEscolha.style.display !== "block") {
      abreFecha();
    }
  });

  eliminarCara();
  escolherCara();
}

function abreFecha() {
  if (caixaDeEscolha.style.display === "block") {
    caixaDeEscolha.style.display = "none";
  } else {
    caixaDeEscolha.style.display = "block";
  }
}

function escolherCara() {
  escolhas.forEach((escolha) => {
    escolha.addEventListener("mousedown", () => {
      caraEscolhida.innerHTML = escolha.innerHTML;
      abreFecha();
    });
  });
}

function eliminarCara() {
  caras.forEach((figura) => {
    figura.addEventListener("mousedown", () => {
      figura.classList.toggle("risco");
    });
  });
}

function limparEliminacoes() {
  caras.forEach((figura) => {
    figura.classList.remove("risco");
  });
}

init();
