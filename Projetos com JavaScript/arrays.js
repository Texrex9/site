// Cria um array constante chamado listaDeCompras com 4 itens iniciais
const listaDeCompras = ["leite", "pão", "ovos", "frutas"];

// Exibe o array completo no console
console.log(listaDeCompras);

// Adiciona um novo elemento "verduras" na posição índice 4 do array
listaDeCompras[4] = "verduras";

// Exibe o array após adicionar o novo elemento no console
console.log(listaDeCompras);

// Adiciona o elemento "carne" ao final do array usando o método push
listaDeCompras.push("carne");

// Exibe o array após adicionar "carne" no console
console.log(listaDeCompras);

// Substitui o elemento na posição índice 2 (que era "ovos") por "queijo"
listaDeCompras[2] = "queijo";

// Exibe o array após substituir o elemento no console
console.log(listaDeCompras);

// Exibe no console o tamanho total do array (quantidade de elementos)
console.log(listaDeCompras.length);

// Acessa o último elemento do array usando length - 1 e exibe no console
console.log(listaDeCompras[listaDeCompras.length - 1]);

// Adiciona o elemento "arroz" na posição após o último índice do array
listaDeCompras[listaDeCompras.length] = "arroz";

// Exibe o array após adicionar "arroz" no console
console.log(listaDeCompras);