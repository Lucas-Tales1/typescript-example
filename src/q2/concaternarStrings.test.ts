import { concatenarStrings } from './concatenarStrings';

test('concatenarStrings deve juntar as palavras com espaço', () => {
  const array = ['Arrays', 'com', 'TypeScript'];
  const esperado = 'Arrays com TypeScript';
  expect(concatenarStrings(array)).toBe(esperado);
});