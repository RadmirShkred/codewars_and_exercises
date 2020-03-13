let arr = ['Andrey', 'Vasja', 'Kirill'];
let ages = [23, 30, 50];

const listOfAge = ages.map((age, index) => {
    return {age: age, name: arr[index]}
});

console.log(listOfAge);
