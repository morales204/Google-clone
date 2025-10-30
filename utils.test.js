const { saludar, despedirse } = require('./funcion');
const { saludarDuplicado, despedirseDuplicado} = require('./funciones');  

test('saludar retorna el mensaje correcto', () => {
  expect(saludar('Juan')).toBe('Hola Juan');
});

test('despedirse retorna el mensaje correcto', () => {
  expect(despedirse('Juan')).toBe('Adiós Juan');
});

test('saludarDuplicado retorna el mensaje correcto', () => {
  expect(saludarDuplicado('Maria')).toBe('Hola Maria');
});

test('despedirseDuplicado retorna el mensaje correcto', () => {
  expect(despedirseDuplicado('Maria')).toBe('Adiós Maria');
});

