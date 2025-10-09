import { pegarDoisPrimeiros } from './pegarDoisPrimeiros';

test('pegarDoisPrimeiros deve retornar os dois primeiros elementos', () => {
  const array = [2, 4, 6, 2, 8, 9, 5];
  const esperado = [2, 4];
  expect(pegarDoisPrimeiros(array)).toEqual(esperado);
});
