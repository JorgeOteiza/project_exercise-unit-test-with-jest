// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    
    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 156.5 yen", function() {
    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1);

    // Si 1 dólar son 156.5 yenes, entonces 1 dólar debe ser 156.5 yenes
    const expected = 156.5;

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(expected);
});

test("One yen should be 0.0064 pounds", function() {
    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1);

    // Si 1 yen son 0.87 libras esterlinas y 156.5 yenes son 1 dólar, entonces 1 yen debe ser (0.87 / 156.5)
    const expected = 0.87 / 156.5;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected);
});