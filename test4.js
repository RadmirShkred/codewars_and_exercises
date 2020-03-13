let arr = ['age', 'name', 'gfgfgf'];

const newArr = arr.map(item => {
    let firstLetter = item[0].toUpperCase();
    let otherLetters = item.substring(1);
    let newWord = firstLetter + otherLetters;
    return newWord;
});

console.log(newArr);
