import { extrairPares } from './extrairPares';

test('extrairPares deve retornar apenas os números pares', () => {
  const array = [8, 3, 9, 5, 6, 12];
  const esperado = [8, 6, 12];
  expect(extrairPares(array)).toEqual(esperado);
});