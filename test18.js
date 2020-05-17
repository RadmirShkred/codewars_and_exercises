function removeEveryOther(arr) {
    const res = arr.filter((item, index) => index % 2 === 0);
    return res;
}

const newArr = ['Hello', 'Goodbye', 'Hello Again'];

console.log(removeEveryOther(newArr));