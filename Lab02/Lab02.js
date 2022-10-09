// Exersise 01:

const gretter = (mArray) => {
    const greetingText = 'Hello';
    mArray.forEach((value) => {
        console.log(`${greetingText} ${value}`);
    });
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);


// Exersise 02:

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


// Exersise 03:

const colors = ['red', 'green', 'blue']
const capitalizedColors = colors.map((t) => capitalize(t));
console.log(capitalizedColors);


// Exersise 04:

const values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = values.filter((t) => t < 20);
console.log(filterLessThan20);


// Exersise 05:

const array = [1, 2, 3, 4]
const calculateSum = array.reduce((a, b) => a + b);
const calculateProduct = array.reduce((a, b) => a * b);
console.log(calculateSum);
console.log(calculateProduct);

// Exersise 06:

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    details() {
        return `Model: ${this.name} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(name, year, model) {
        super(name, year);
        this.model = model;
    }
    info() {
        return `${this.name} has a balance of $${this.model}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());



