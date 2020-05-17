const result = (i, s) => {
    while (i < 99) {
        if (i % 2 === 0) {
            s += 3;
            ++i;
        } else {
            s += 2;
            ++i;
        }
    }
    return s;
};

const res = result(0, 0);

console.log(res);