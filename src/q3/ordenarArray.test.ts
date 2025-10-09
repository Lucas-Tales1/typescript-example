import { ordenarArrayDecrescente } from './ordenarArray';

test('ordenarArrayDecrescente deve ordenar strings em ordem decrescente', () => {
  const array = ['carro', 'boneco', 'ave', 'lapis'];
  const esperado = ['lapis', 'carro', 'boneco', 'ave'];
  expect(ordenarArrayDecrescente(array)).toEqual(esperado);
});
