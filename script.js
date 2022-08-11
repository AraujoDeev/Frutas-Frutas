function abrirMenu() {
  document.getElementById("menu").style.width = "200px";
}

function fecharMenu() {
  document.getElementById("menu").style.width = "0px";
}

function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener("click", (evento) => {
    if (evento.target.id === modalID || evento.target.className == "fechar")
      modal.classList.remove("mostrar");
  });
}

const receitas = document.querySelectorAll(".btn-receita");
receitas.forEach((valorAtual) => {
  valorAtual.addEventListener("click", () => {
    iniciaModal("modal-receita");
  });
});

const fechar = document.querySelector(".fechar");
fechar.addEventListener("click", () => {
  fecharReceita;
});

function fecharReceita(btn) {
  classList.remove("mostrar");
}
