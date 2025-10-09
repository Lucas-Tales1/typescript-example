export interface Veiculo {
  descricao(): string;
}

export class Carro implements Veiculo {
  constructor(
    public modelo: string,
    public ano: number,
    public cor: string
  ) {}

  descricao(): string {
    return `Carro modelo ${this.modelo}, ano ${this.ano}, cor ${this.cor}.`;
  }
}

export class Moto implements Veiculo {
  constructor(
    public marca: string,
    public cilindradas: number
  ) {}

  descricao(): string {
    return `Moto marca ${this.marca}, ${this.cilindradas}cc.`;
  }
}
