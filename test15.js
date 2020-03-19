let ages = [82, 15, 6, 38, 35];


function differenceInAges(ages) {
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }

    const sort = ages.sort(compareNumeric);
    const min = sort[0];
    const max = sort[sort.length - 1];
    const res = [];
    res.push(min);
    res.push(max);
    res.push(max - min);
    return res;
}

console.log(differenceInAges(ages));
