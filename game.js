class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "desconhecido";
        break;
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

p1 = new Heroi("Aragorn", 35, "guerreiro");
p2 = new Heroi("Gandalf", 120, "mago");
p3 = new Heroi("Liara", 28, "monge");
p4 = new Heroi("Kenshin", 22, "ninja");
p5 = new Heroi("Merlin", 150, "mago");

p1.atacar();
p2.atacar();
p3.atacar();
p4.atacar();
p5.atacar();
