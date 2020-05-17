const result = (numArray) => {
    return Math.max.apply(null, numArray);
};

function expressionMatter(a, b, c) {
    if (a == null || b == null || c == null) {
        return 8;
    } else {
        const first = a * (b + c);
        const second = a * b * c;
        const third = a + b * c;
        const fourth = (a + b) * c;
        const fifth = a + b + c;
        const arr = [first, second, third, fourth, fifth];
        return result(arr);
    }
}
