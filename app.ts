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

console.log("e1", e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
