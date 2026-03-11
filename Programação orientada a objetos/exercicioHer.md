# exercicioHer.js — Herança entre Produtos

## Descrição

Exercício de herança em JavaScript usando uma hierarquia de produtos para uma loja virtual.

## Conceito abordado

**Herança** (`extends` / `super`): permite que uma classe filha reaproveite atributos e métodos de uma classe pai, adicionando apenas o que for específico.

## Estrutura das classes

| Classe       | Herda de  | Atributos próprios    |
| ------------ | --------- | --------------------- |
| `Produto`    | —         | `nome`, `preco`       |
| `VideoGame`  | `Produto` | —                     |
| `Eletronico` | `Produto` | `garantia` (em meses) |

## Como executar

```bash
node exercicioHer.js
```

## Saída esperada

```
Xbox-Series S, 2.500,00
Iphone, 5.000,00, 9 meses
```
