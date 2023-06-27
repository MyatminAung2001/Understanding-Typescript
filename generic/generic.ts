const names: Array<string> = ["Alex", "Anna"];
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});

// generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Alex" }, { age: 21 });
console.log(mergeObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = "Got no value";

    if (element.length === 1) {
        description = "Got " + element.length + " element.";
    } else if (element.length > 1) {
        description = "Got " + element.length + " elements.";
    }

    return [element, description];
}

console.log(countAndDescribe("Hi there!"));

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return "Value: " + obj[key];
}

extractAndConvert({ name: "Alex" }, "name");

// generic classes
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) !== -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItem() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Alex");
textStorage.addItem("Anna");
textStorage.removeItem("Alex");
console.log(textStorage.getItem());

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "Alex" });
// objectStorage.addItem({ name: "Anna" });
// objectStorage.removeItem({ name: "Alex" });
// console.log(objectStorage.getItem());

// generic utility types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    // Partial utility type
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const list: Readonly<string[]> = ["Alex", "Anna"];
// list.push("Manu");
