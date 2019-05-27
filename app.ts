const double = (value: number) => {
    return value * 2;
}
console.log(double(10));
 
const greet = (name: string = 'Max') => {
    console.log('Hello, ' + name)
}

greet();
greet("Anna");

let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers)); 

const newArray = [55, 20];
numbers.push(...newArray);
console.log(newArray);
 
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);