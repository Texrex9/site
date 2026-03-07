class Moto {
  constructor(fabricante, modelo, ano) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
  }
  mostrarDadosDaMoto() {
    console.log(`${this.fabricante}, ${this.modelo}, ${this.ano}`);
  }

  mostrarModelo() {
    console.log(`O modelo da moto é ${this.modelo}`);
  }
  acelerar() {
    console.log("Acelerando...");
  }
}

class Carro {
  constructor(fabricante, modelo, ano, tipo, qtPortas) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.qtPortas = qtPortas;
  }
  mostrarDadosDoCarro() {
    console.log(
      `${this.fabricante} ${this.modelo}, ${this.ano}, ${this.tipo}, ${this.qtPortas} portas`,
    );
  }

  mostrarModelo() {
    console.log(`O medelo do carro é ${this.modelo}`);
  }

  acelerar() {
    console.log("Acelerando...");
  }
}

const meuCarro = new Carro("Chevrolet", "Onix", 2020, "Hatch", 4);
meuCarro.mostrarDadosDoCarro();
meuCarro.mostrarModelo();
meuCarro.acelerar();

const minhaMoto = new Moto("Yamaha", "Esportiva", "2008");
minhaMoto.mostrarDadosDaMoto();
minhaMoto.mostrarModelo();
minhaMoto.acelerar();
