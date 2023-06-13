function add(
    number1: number,
    number2: number,
    printResult: boolean,
    result: string
) {
    if (printResult) {
        console.log(result + number1 + number2);
    } else {
        return number1 + number2;
    }
}

const number1 = 5;
const number2 = 5.5;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
