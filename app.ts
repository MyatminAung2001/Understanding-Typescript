class Department {
    private readonly id: string;
    public name: string;
    private employees: string[] = [];

    constructor(id: string, n: string) {
        this.id = id;
        this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}: ${this.name})`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    reports: string[];

    constructor(id: string, admins: string[], reports: string[]) {
        super(id, "IT");
        this.admins = admins;
        this.reports = reports;
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment("D-1", ["Alex", "Joe"], []);
it.describe();

console.log(it);

it.addEmployee("Alex");
it.addEmployee("Joe");

it.printEmployeeInfo();

it.addReport("this is report one");
it.addReport("this is report two");

it.getReports();
