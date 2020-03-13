let objs = [23, 5, null, true, 'Vasja', {}, []];
let el = null;

const newArr = objs.map((item) => {
    if (typeof item === 'number') {
        el = {age: item};
    } else if (typeof item === 'string') {
        el = item.toUpperCase();
    } else {
        el = 'not a number or a string';
    }

    return el;
});

console.log(newArr);
