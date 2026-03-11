/*
  ============================================================
  PROJETO: Trabalhando com JSON
  ============================================================
  O que este arquivo faz?

  JSON é um formato de texto muito usado para trocar informações
  entre sistemas — funciona como uma "embalagem" padronizada
  para enviar dados pela internet.

  Aqui temos uma lista de 3 produtos (camiseta, calça e tênis).
  O programa demonstra dois processos:

  1. Stringify (empacotamento): converte a lista de produtos em
     texto JSON — ideal para enviar para um servidor ou salvar em arquivo.

  2. Parse (desempacotamento): converte o texto JSON de volta
     para uma lista de produtos que o programa consegue usar.

  O console exibe o resultado de cada etapa para comparação.
  ============================================================
*/

// Array de objetos representando uma lista de produtos
const produtos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça", preco: 39.99 },
  { id: 3, nome: "Tênis", preco: 299.99 },
];

// Converte o array de objetos para uma string no formato JSON
const produtosJson = JSON.stringify(produtos);
console.log(produtos); // Exibe o array original (objeto JavaScript)
console.log(produtosJson); // Exibe a string JSON gerada

// Converte a string JSON de volta para um objeto JavaScript
const produtosObj = JSON.parse(produtosJson);
console.log(produtosObj); // Exibe o objeto restaurado a partir do JSON
