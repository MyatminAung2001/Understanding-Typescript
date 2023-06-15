const person: {
    name: string;
    age: number;
} = {
    name: "Myat Min Aung",
    age: 21,
};

console.log(person.name);

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

console.log(nestedObjects.age);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of nestedObjects.hobbies) {
    console.log(hobby);
}
