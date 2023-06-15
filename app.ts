const person: {
    name: string;
    age: number;
} = {
    name: "Myat Min Aung",
    age: 21,
};

console.log(person);

const nestedObjects: {
    name: string;
    age: number;
    hobbies: string[];
    from: {
        country: string;
        city: string;
    };
} = {
    name: "Myat Min Aung",
    age: 21,
    hobbies: ["swimming, football"],
    from: {
        country: "Myanmar",
        city: "Yangon",
    },
};

console.log(nestedObjects);
