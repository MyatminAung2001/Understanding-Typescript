const buttton = document.querySelector("button")!;

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    console.log("Clicked " + message);
}

if (buttton) {
    buttton.addEventListener(
        "click",
        clickHandler.bind(null, "You're welcome!")
    );
}

const person = {
    name: "Myatmin Aung",
    age: 21,
};

const copiedPerson = { ...person };
console.log(copiedPerson);
