function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const restBlue = blueStart - bluePulled;
    const restRed = redStart - redPulled;
    const sumRest = restBlue + restRed;
    const result = Number((1 / sumRest) * restBlue);

    return parseFloat(result.toPrecision(1));
}

console.log(guessBlue(12, 18, 4, 6));
