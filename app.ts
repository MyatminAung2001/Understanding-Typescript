type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Alex",
    privileges: ["start-date"],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add("Alex", "B");
result.split(" ");

// optional chaining
const fetchedUserData = {
    id: "u1",
    name: "Alex",
    job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

// nullish coalescing
const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

// type guards
type UnknownEmployee = Admin | Employee;

const printEmployeeInfo = (emp: UnknownEmployee) => {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("StartDate: " + emp.startDate);
    }
};

printEmployeeInfo(e1);

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
        console.log("Loading cargo: " + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};

useVehicle(v1);
useVehicle(v2);

// discriminated unions
interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
};

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
const userInputElement = document.getElementById(
    "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!";
