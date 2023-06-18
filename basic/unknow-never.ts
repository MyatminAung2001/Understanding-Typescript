let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Myatmin Aung";

if (typeof userInput === "string") {
    userName = userInput;
}

const processValue = (val: unknown) => {
    if (typeof val === "string") {
        console.log(val.toLocaleUpperCase());
    } else if (typeof val === "number") {
        console.log(val.toFixed(2));
    } else {
        console.log("Unknown Type");
    }
};

processValue("hello world");
processValue(34.13);
processValue(true);

const generateError = (msg: string, status: number): never => {
    throw {
        msg,
        status,
    };
};

generateError("Internal Server Error", 500);
