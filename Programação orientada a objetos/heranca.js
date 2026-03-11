/*
  ============================================================
  PROJETO: Herança entre Veículos
  ============================================================
  O que este arquivo faz?

  Imagina que você tem um molde genérico chamado "Veículo",
  que guarda informações básicas como fabricante, modelo e ano.

  A partir desse molde, criamos dois tipos específicos:
    - Carro: além das informações básicas, sabe quantas portas tem e qual o tipo (Hatch, Sedan...)
    - Moto:  além das informações básicas, guarda as cilindradas do motor

  Isso se chama HERANÇA: os moldes filhos (Carro e Moto) aproveitam
  tudo que o molde pai (Veiculo) já tem, e adicionam só o que for diferente.

  Ao final, criamos um carro e uma moto de verdade e exibimos
  suas informações no console (a tela de saída do programa).
  ============================================================
*/

// Classe base que representa um veículo genérico com atributos comuns
class Veiculo {
  // Construtor inicializa os atributos compartilhados por todos os veículos
  constructor(fabricante, modelo, ano, tipo, qtPortas) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.qtPortas = qtPortas;
  }
}

// Classe Carro herda de Veiculo (herança)
class Carro extends Veiculo {
  // Repassa todos os atributos para a classe pai via super()
  constructor(fabricante, modelo, ano, tipo, qtPortas) {
    super(fabricante, modelo, ano, tipo, qtPortas);
  }

  // Exibe todos os dados do carro no console
  mostrarDadosVeiculo() {
    console.log(
      `${this.fabricante}, ${this.modelo}, ${this.ano}, ${this.tipo}, ${this.qtPortas} portas`,
    );
  }

  // Exibe apenas o modelo do carro
  mostrarModelo() {
    console.log(`O modelo do carro é ${this.modelo}`);
  }

  // Simula a ação de acelerar
  acelerar() {
    console.log(`Acelerar....`);
  }
}

// Classe Moto herda de Veiculo e adiciona o atributo cilindradas
class Moto extends Veiculo {
  constructor(fabricante, modelo, ano, cilindradas) {
    // Chama o construtor de Veiculo apenas com os atributos em comum
    super(fabricante, modelo, ano);
    this.cilindradas = cilindradas; // Atributo exclusivo de Moto
  }

  // Exibe os dados da moto, incluindo cilindradas
  mostrarDadosVeiculo() {
    console.log(
      `${this.fabricante}, ${this.modelo}, ${this.ano}, ${this.cilindradas} cilindradas`,
    );
  }

  // Exibe apenas o modelo da moto
  mostrarModelo() {
    console.log(`O modelo da moto é ${this.modelo}`);
  }

  // Simula a ação de acelerar
  acelerar() {
    console.log(`Acelarar....`);
  }
}

// Criando instâncias das subclasses com seus respectivos atributos
const meuCarro = new Carro("Ford", "KA", "2020", "Sedan", 4);
const minhaMoto = new Moto("Yamaha", "Esportivo", "2022", 300);

// Chamando os métodos de cada objeto
meuCarro.mostrarDadosVeiculo();
meuCarro.mostrarModelo();
minhaMoto.mostrarDadosVeiculo();
minhaMoto.mostrarModelo();
meuCarro.acelerar();
minhaMoto.acelerar();
