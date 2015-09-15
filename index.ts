class Person {
    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName() {
        return this.firstName + " " + this.lastName;
    }
}