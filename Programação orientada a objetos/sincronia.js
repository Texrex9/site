/*
  ============================================================
  PROJETO: Programação Assíncrona com Promises
  ============================================================
  O que este arquivo faz?

  Imagine que você pede uma pizza: o entregador não aparece
  instantaneamente — você precisa esperar. Em programação,
  chamamos isso de operação assíncrona.

  Este arquivo simula uma busca de dados em um servidor:
    - A função "buscarDadosdoServidor" espera 2 segundos (como
      se fosse o tempo de resposta da internet) e depois decide
      aleatoriamente se a busca teve sucesso ou falhou.

  São mostradas duas formas de lidar com essa espera:
    1. .then() / .catch(): forma mais antiga, encadeando ações
    2. async / await: forma mais moderna e fácil de ler

  O console vai exibir "Fim" imediatamente e, 2 segundos depois,
  mostrará se os dados chegaram ou se houve erro — demonstrando
  que o programa não ficou parado esperando.
  ============================================================
*/

// Função assíncrona que simula a busca de dados de um servidor.
// Retorna uma Promise que resolve com sucesso ou rejeita com erro após um atraso.
function buscarDadosdoServidor() {
  // Retorna uma nova Promise, que é um objeto usado para operações assíncronas.
  // A Promise aceita dois parâmetros: resolve (para sucesso) e reject (para erro).
  return new Promise((resolve, reject) => {
    // Exibe uma mensagem no console indicando que a busca está começando.
    console.log("Buscando dados do servidor");

    // setTimeout simula um atraso de 2 segundos (2000 milissegundos) para representar o tempo de resposta do servidor.
    setTimeout(() => {
      // Gera um valor booleano aleatório: true se Math.random() > 0.5, simulando sucesso ou falha.
      let sucesso = Math.random() > 0.5;

      // Se sucesso for true, resolve a Promise com uma mensagem de sucesso.
      if (sucesso) {
        resolve("Dados recebidos com sucesso");
      } else {
        // Caso contrário, rejeita a Promise com uma mensagem de erro.
        reject("Falha ao buscar dados do servidor");
      }
    }, 2000); // Fim do setTimeout, executado após 2 segundos.
  }); // Fim da Promise.
}

const minhaFuncaoAssincrona = async () => {
  // Tenta buscar os dados e mostrar o resultado quando chegar
  try {
    const resultado = await buscarDadosdoServidor();
    console.log(resultado);
    // Se der erro na busca, este bloco mostra o problema
  } catch (erro) {
    console.error(erro); // "error" em inglês — exibe o erro no console
  }
};
// Dispara a rotina assíncrona (ela roda em paralelo com o restante do código)
minhaFuncaoAssincrona();
// Esta linha aparece antes do resultado da busca para provar que o código não travou
console.log("Fim");
