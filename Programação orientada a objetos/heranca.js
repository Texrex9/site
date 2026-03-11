class Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtPortas) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.qtPortas = qtPortas;
  }
}

class Carro extends Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtPortas) {
    super(fabricante, modelo, ano, tipo, qtPortas);
  }

  mostrarDadosVeiculo() {
    console.log(
      `${this.fabricante}, ${this.modelo}, ${this.ano}, ${this.tipo}, ${this.qtPortas} portas`,
    );
  }

  mostrarModelo() {
    console.log(`O modelo do carro é ${this.modelo}`);
  }

  acelerar() {
    console.log(`Acelerar....`);
  }
}

class Moto extends Veiculo {
  constructor(fabricante, modelo, ano, cilindradas) {
    super(fabricante, modelo, ano);
    this.cilindradas = cilindradas;
  }

  mostrarDadosVeiculo() {
    console.log(
      `${this.fabricante}, ${this.modelo}, ${this.ano}, ${this.cilindradas} cilindradas`,
    );
  }

  mostrarModelo() {
    console.log(`O modelo da moto é ${this.modelo}`);
  }

  acelerar() {
    console.log(`Acelarar....`);
  }
}

const meuCarro = new Carro("Ford", "KA", "2020", "Sedan", 4);
const minhaMoto = new Moto("Yamaha", "Esportivo", "2022", 300);

meuCarro.mostrarDadosVeiculo();
meuCarro.mostrarModelo();
minhaMoto.mostrarDadosVeiculo();
minhaMoto.mostrarModelo();
meuCarro.acelerar();
minhaMoto.acelerar();
