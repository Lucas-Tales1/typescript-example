import { Carro, Moto, Veiculo } from './veiculos';

test('Classes Carro e Moto devem implementar descricao corretamente', () => {
  const carro: Veiculo = new Carro('Uno', 2015, 'vermelho');
  const moto: Veiculo = new Moto('Honda', 150);

  expect(carro.descricao()).toBe('Carro modelo Uno, ano 2015, cor vermelho.');
  expect(moto.descricao()).toBe('Moto marca Honda, 150cc.');

  (carro as Carro).modelo = 'Gol';
  (carro as Carro).ano = 2020;
  (carro as Carro).cor = 'azul';
  (moto as Moto).marca = 'Yamaha';
  (moto as Moto).cilindradas = 250;

  expect(carro.descricao()).toBe('Carro modelo Gol, ano 2020, cor azul.');
  expect(moto.descricao()).toBe('Moto marca Yamaha, 250cc.');
});
