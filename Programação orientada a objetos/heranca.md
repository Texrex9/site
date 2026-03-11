# heranca.js — Herança entre Veículos

## Descrição

Demonstração do conceito de herança em JavaScript usando uma hierarquia de veículos.

## Conceito abordado

**Herança** (`extends` / `super`): a classe pai `Veiculo` centraliza os atributos comuns, enquanto as classes filhas `Carro` e `Moto` herdam esses atributos e adicionam os próprios.

## Estrutura das classes

| Classe    | Herda de  | Atributos próprios            |
| --------- | --------- | ----------------------------- |
| `Veiculo` | —         | `fabricante`, `modelo`, `ano` |
| `Carro`   | `Veiculo` | `tipo`, `qtPortas`            |
| `Moto`    | `Veiculo` | `cilindradas`                 |

## Métodos disponíveis

- `mostrarDadosVeiculo()` — exibe os atributos do veículo no console.
- `mostrarModelo()` — exibe apenas o modelo.
- `acelerar()` — simula a ação de acelerar.

## Como executar

```bash
node heranca.js
```

## Saída esperada

```
Ford, KA, 2020, Sedan, 4 portas
O modelo do carro é KA
Yamaha, Esportivo, 2022, 300 cilindradas
O modelo da moto é Esportivo
Acelerar....
Acelarar....
```
