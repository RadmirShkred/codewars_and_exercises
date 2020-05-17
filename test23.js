function derive(coefficient, exponent) {
    const multiplier = coefficient * exponent;
    const substrOfExponent = exponent - 1;
    return `${multiplier}x^${substrOfExponent}`;
}

derive(7, 8);
