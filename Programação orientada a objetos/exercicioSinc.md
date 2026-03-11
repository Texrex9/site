# exercicioSinc.js — Assincronismo + JSON

## Descrição

Exercício que combina programação assíncrona com serialização/desserialização de dados em JSON.

## Conceitos abordados

- **Promise**: objeto que representa o resultado futuro de uma operação assíncrona.
- **`.then()` / `.catch()`**: forma encadeada de tratar o resultado de uma Promise.
- **`async` / `await`**: sintaxe moderna para lidar com Promises de forma mais legível.
- **`JSON.stringify()`**: converte um objeto JavaScript em string JSON.
- **`JSON.parse()`**: converte uma string JSON de volta em objeto JavaScript.

## Fluxo do programa

1. `CarregaProduto(id)` retorna uma Promise que resolve após 2 segundos com um objeto produto.
2. O mesmo fluxo é demonstrado de duas formas: `.then()` e `async/await`.
3. Em cada forma, o produto é convertido para JSON e depois restaurado ao estado original.

## Como executar

```bash
node exercicioSinc.js
```

## Saída esperada (após ~2 segundos)

```
Produto carregado: { id: 1, nome: 'Produto 1', preco: '10.00' }
JSON do produto: {"id":1,"nome":"Produto 1","preco":"10.00"}
Objeto restaurado: { id: 1, nome: 'Produto 1', preco: '10.00' }
[async] Produto carregado: { id: 1, nome: 'Produto 1', preco: '10.00' }
[async] JSON do produto: {"id":1,"nome":"Produto 1","preco":"10.00"}
[async] Objeto restaurado: { id: 1, nome: 'Produto 1', preco: '10.00' }
```
