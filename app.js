const { processTemp, display } = require("./index.js")

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