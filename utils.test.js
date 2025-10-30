const { saludar, despedirse } = require('./funcion');

test('saludar retorna el mensaje correcto', () => {
  expect(saludar('Juan')).toBe('Hola Juan');
});

test('despedirse retorna el mensaje correcto', () => {
  expect(despedirse('Juan')).toBe('Adiós Juan');
});
