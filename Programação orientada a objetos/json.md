# json.js — Trabalhando com JSON

## Descrição

Demonstração do uso de JSON em JavaScript para serializar e desserializar uma lista de produtos.

## Conceitos abordados

- **`JSON.stringify()`**: converte um array ou objeto JavaScript em uma string no formato JSON, pronto para ser enviado pela rede ou salvo em arquivo.
- **`JSON.parse()`**: converte uma string JSON de volta para um objeto JavaScript utilizável pelo programa.

## Fluxo do programa

1. Cria um array com 3 produtos (camiseta, calça e tênis).
2. Serializa o array com `JSON.stringify()` e exibe a string resultante.
3. Desserializa a string com `JSON.parse()` e exibe o objeto restaurado.

## Como executar

```bash
node json.js
```

## Saída esperada

```
[ { id: 1, nome: 'Camiseta', preco: 25.99 }, ... ]
[{"id":1,"nome":"Camiseta","preco":25.99}, ...]
[ { id: 1, nome: 'Camiseta', preco: 25.99 }, ... ]
```
