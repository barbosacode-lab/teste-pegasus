
const ascendingOrder = temperatures => temperatures.sort((a, b) => a - b);
const isEven = v => (v % 2) == 0;
const kelvinScale = (...temperatures) => temperatures.map(temperature => temperature + ' K');
const arithmeticAVG = temperatures => {
    const sum = temperatures.reduce((acc, temperature) => acc += temperature);
    return sum / temperatures.length;
}
const SomeNegativeValue = value => value.some(x => Math.sign(x) == -1);
const medianFn = rollTemperatures => {
    const size_t = rollTemperatures.length;
    let measuresOfCenter, medianResult;

    if (isEven(size_t)) {
        measuresOfCenter = (size_t / 2) - 1;
        medianResult = (rollTemperatures[measuresOfCenter] + rollTemperatures[measuresOfCenter + 1]) / 2;
        return medianResult;
    }

    measuresOfCenter = parseInt(size_t / 2);
    return rollTemperatures[measuresOfCenter];
}


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


function main(...args) {

    let stdOut;

    try {
        stdOut = processTemp(...args);
        display(stdOut);
    } catch ({ message }) {
        console.error(message);
    }


    return true;
}



main(3, 100, 50, 300);