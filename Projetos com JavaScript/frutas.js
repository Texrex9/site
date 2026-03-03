// Cria um array constante chamado listaDeFrutas com 5 frutas diferentes
const listaDeFrutas = ["maçã", "banana", "laranja", "uva","abacaxi"];
// Exibe todo o array no console para visualização
console.log(listaDeFrutas);

// Acessa o elemento no índice 2 do array (que é "laranja") e exibe no console
console.log(listaDeFrutas[2]);

// Substitui o elemento no índice 1 (que era "banana") por "pera"
listaDeFrutas[1] = "pera";
// Exibe o array modificado no console
console.log(listaDeFrutas);

// Adiciona dois novos elementos ao final do array: "manga" e "melancia" usando o método push
listaDeFrutas.push("manga", "melancia");
// Exibe o array com os novos elementos adicionados no console
console.log(listaDeFrutas);

// Exibe no console o tamanho total do array (quantidade de elementos)
console.log(listaDeFrutas.length);