// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes japoneses
    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
    // Retornamos el valor en yenes japoneses
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras esterlinas
    let valueInPound = valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    // Retornamos el valor en libras esterlinas
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };



const convertidorDeMoneda = {
    fromDollarToYen: (montoDolares) => {
        return montoDolares * oneEuroIs["JPY"] / oneEuroIs["USD"];
    },
    fromEuroToDollar: (montoEuros) => {
        return montoEuros * oneEuroIs["USD"];
    },
    fromYenToPound: (montoYenes) => {
        return montoYenes * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    },
};

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };