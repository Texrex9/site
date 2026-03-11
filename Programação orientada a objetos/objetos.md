# objetos.js — Classes e Objetos

## Descrição

Introdução à Orientação a Objetos em JavaScript com a criação de classes e instâncias.

## Conceito abordado

**Classes e objetos**: uma classe é um molde que define atributos (dados) e métodos (comportamentos). Um objeto é uma instância criada a partir desse molde com valores reais.

## Classes definidas

### `Moto`

| Atributo     | Tipo   |
| ------------ | ------ |
| `fabricante` | string |
| `modelo`     | string |
| `ano`        | string |

Métodos: `mostrarDadosDaMoto()`, `mostrarModelo()`, `acelerar()`

### `Carro`

| Atributo     | Tipo   |
| ------------ | ------ |
| `fabricante` | string |
| `modelo`     | string |
| `ano`        | number |
| `tipo`       | string |
| `qtPortas`   | number |

Métodos: `mostrarDadosDoCarro()`, `mostrarModelo()`, `acelerar()`

## Como executar

```bash
node objetos.js
```

## Saída esperada

```
Chevrolet Onix, 2020, Hatch, 4 portas
O medelo do carro é Onix
Acelerando...
Yamaha, Esportiva, 2008
O modelo da moto é Esportiva
Acelerando...
```
