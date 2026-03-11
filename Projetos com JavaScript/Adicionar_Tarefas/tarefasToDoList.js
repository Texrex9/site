

const inputTarefa = document.getElementById("campotarefa");
const listaTarefas = document.getElementById("listaTarefas");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoFinalizar = document.getElementById("botaoFinalizar");
const botaoReabrir = document.getElementById("botaoReabrir");
const areaTarefasParaFazer = document.getElementById("areaTarefasParaFazer");
const listaTarefasParaFazer = document.getElementById("listaTarefasParaFazer");

function adicionarTarefa() {
  if (inputTarefa.disabled) {
    alert("A lista já foi finalizada.");
    return;
  }

  const valorTarefa = inputTarefa.value.trim();

  if (valorTarefa === "") {
    alert("Por favor, digite uma tarefa!");
    inputTarefa.focus();
    return;
  }

  const novoItem = document.createElement("li");
  const textoTarefa = document.createElement("span");
  textoTarefa.className = "texto-tarefa";
  textoTarefa.textContent = valorTarefa;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.className = "botao-excluir";
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.addEventListener("click", function () {
    excluirTarefa(botaoExcluir);
  });

  novoItem.appendChild(textoTarefa);
  novoItem.appendChild(botaoExcluir);
  listaTarefas.appendChild(novoItem);

  inputTarefa.value = "";
  inputTarefa.focus();
}

function excluirTarefa(botaoExcluir) {
  const item = botaoExcluir.parentElement;

  if (item) {
    item.remove();
  }
}

function finalizarLista() {
  const itens = listaTarefas.querySelectorAll("li");

  if (itens.length === 0) {
    alert("Adicione pelo menos uma tarefa antes de finalizar a lista.");
    return;
  }

  listaTarefasParaFazer.innerHTML = "";

  itens.forEach(function (item) {
    const textoOriginal = item.querySelector(".texto-tarefa");
    const itemAreaFazer = document.createElement("li");
    itemAreaFazer.textContent = textoOriginal
      ? textoOriginal.textContent
      : item.textContent;

    listaTarefasParaFazer.appendChild(itemAreaFazer);
    item.classList.add("tarefa-finalizada");

    const botaoExcluir = item.querySelector(".botao-excluir");
    if (botaoExcluir) {
      botaoExcluir.disabled = true;
    }
  });

  areaTarefasParaFazer.classList.add("ativa");
  listaTarefas.classList.add("lista-finalizada");
  inputTarefa.disabled = true;
  botaoAdicionar.disabled = true;
  botaoFinalizar.disabled = true;
  botaoReabrir.disabled = false;
  botaoFinalizar.textContent = "Lista Finalizada";
}

function reabrirLista() {
  const itens = listaTarefas.querySelectorAll("li");

  itens.forEach(function (item) {
    item.classList.remove("tarefa-finalizada");

    const botaoExcluir = item.querySelector(".botao-excluir");
    if (botaoExcluir) {
      botaoExcluir.disabled = false;
    }
  });

  listaTarefas.classList.remove("lista-finalizada");
  areaTarefasParaFazer.classList.remove("ativa");
  listaTarefasParaFazer.innerHTML = "";

  inputTarefa.disabled = false;
  botaoAdicionar.disabled = false;
  botaoFinalizar.disabled = false;
  botaoReabrir.disabled = true;
  botaoFinalizar.textContent = "Finalizar Lista";
  inputTarefa.focus();
}

inputTarefa.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});
