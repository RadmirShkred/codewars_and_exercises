let arr = ['Andrey', 'Vasja', 'Kirill'];

const newArr = arr.map(item => {
    return {name: item};
});

console.log(newArr);
