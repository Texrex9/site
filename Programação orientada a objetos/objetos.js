/*
  ============================================================
  PROJETO: Orientação a Objetos - Classes e Objetos
  ============================================================
  O que este arquivo faz?

  Em programação, usamos "classes" como se fossem fichas cadastrais.
  Cada ficha descreve como um objeto deve ser: quais informações ele
  guarda e o que ele sabe fazer.

  Aqui criamos duas fichas:
    - Moto: guarda fabricante, modelo e ano; sabe se apresentar e "acelerar"
    - Carro: guarda fabricante, modelo, ano, tipo e quantidade de portas;
             também sabe se apresentar e "acelerar"

  Depois, preenchemos fichas reais (chamadas de instâncias):
    - Um Chevrolet Onix 2020
    - Uma Yamaha Esportiva 2008

  O programa então exibe as informações de cada um no console.
  ============================================================
*/

// Classe que representa uma moto com seus atributos e métodos
class Moto {
  // Construtor inicializa os atributos da moto
  constructor(fabricante, modelo, ano) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Exibe os dados completos da moto no console
  mostrarDadosDaMoto() {
    console.log(`${this.fabricante}, ${this.modelo}, ${this.ano}`);
  }

  // Exibe apenas o modelo da moto
  mostrarModelo() {
    console.log(`O modelo da moto é ${this.modelo}`);
  }

  // Simula a ação de acelerar
  acelerar() {
    console.log("Acelerando...");
  }
}

// Classe que representa um carro com mais atributos que a moto
class Carro {
  // Construtor inicializa todos os atributos do carro
  constructor(fabricante, modelo, ano, tipo, qtPortas) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo; // Ex.: Hatch, Sedan, SUV
    this.qtPortas = qtPortas;
  }

  // Exibe os dados completos do carro no console
  mostrarDadosDoCarro() {
    console.log(
      `${this.fabricante} ${this.modelo}, ${this.ano}, ${this.tipo}, ${this.qtPortas} portas`,
    );
  }

  // Exibe apenas o modelo do carro
  mostrarModelo() {
    console.log(`O medelo do carro é ${this.modelo}`);
  }

  // Simula a ação de acelerar
  acelerar() {
    console.log("Acelerando...");
  }
}

// Criando uma instância de Carro e chamando seus métodos
const meuCarro = new Carro("Chevrolet", "Onix", 2020, "Hatch", 4);
meuCarro.mostrarDadosDoCarro();
meuCarro.mostrarModelo();
meuCarro.acelerar();

// Criando uma instância de Moto e chamando seus métodos
const minhaMoto = new Moto("Yamaha", "Esportiva", "2008");
minhaMoto.mostrarDadosDaMoto();
minhaMoto.mostrarModelo();
minhaMoto.acelerar();
