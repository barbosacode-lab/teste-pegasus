const {
    ascendingOrder,
    kelvinScale,
    arithmeticAVG,
    SomeNegativeValue,
    medianFn
} = require("./utils/utils")


function display(temperaturesObject) {

    const listOfTemperaturesK = kelvinScale(...temperaturesObject['temperatures']);
    const meanK = kelvinScale(temperaturesObject['average']);
    const middleK = kelvinScale(temperaturesObject['median']);

    console.log(`Temperaturas ordenadas - ${listOfTemperaturesK}`);
    console.log(`Mediana - ${middleK}`);
    console.log(`Média ${meanK}`);
}


function processTemp(...tempValues) {
    const [input] = tempValues;

    if (typeof input == 'string')
        throw new TypeError('<TypeError>:Valor não esperado: Entre com um número válido');


    const [sizeOfTemperatures, ...temperatures] = tempValues;
    const len = temperatures.length
    let mean, sortedTemperatures, middle;

    if (len == sizeOfTemperatures) {
        if (SomeNegativeValue(temperatures))
            throw new RangeError("<RangeError>: Não existem números negativos na escala Kelvin");

        sortedTemperatures = ascendingOrder(temperatures);
        mean = arithmeticAVG(sortedTemperatures);
        middle = medianFn(sortedTemperatures);
    } else {
        throw new RangeError('<RangeError>: O valor de entrada não corresponde aos valores subsequentes.');
    }

    return { temperatures: sortedTemperatures, average: mean, median: middle };
}

module.exports = { display, processTemp }