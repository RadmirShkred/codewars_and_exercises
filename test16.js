function getGrade(s1, s2, s3) {
    const score = (s1 + s2 + s3) / 3;
    let result = '';
    if (90 <= score && score <= 100) {
        result = 'A';
    } else if (80 <= score && score < 90) {
        result = 'B';
    } else if (70 <= score && score < 80) {
        result = 'C';
    } else if (60 <= score && score < 70) {
        result = 'D';
    } else if (0 <= score && score < 60) {
        result = 'F';
    }
    return result;
}

console.log(getGrade(70, 70, 100));