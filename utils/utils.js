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


module.exports = { ascendingOrder, isEven, kelvinScale, arithmeticAVG, SomeNegativeValue, medianFn };