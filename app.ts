function combine(
    input1: number | string,
    input2: number | string,
    resultType: "as-number" | "as-string"
) {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultType === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAge = combine(10, 11, "as-number");
console.log(combinedAge);

const combinedStringAge = combine("10", "11", "as-number");
console.log(combinedStringAge);

const combinedName = combine("Myatmin", " Aung", "as-string");
console.log(combinedName);
