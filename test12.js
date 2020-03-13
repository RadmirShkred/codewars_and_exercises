let arr = ['машина', 23, null, 'улов', 55, 'ёж', 'эскалатор', undefined];

const newArr = arr.filter(item => typeof item === "number" || typeof item === "string");

console.log(newArr);
