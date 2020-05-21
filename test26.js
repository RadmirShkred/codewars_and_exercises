function abbrevName(name) {
    let arr = name.split(' ');
    return `${arr[0].substr(0, 1).toUpperCase()}.${arr[1].substr(0, 1).toUpperCase()}`;
}

abbrevName("Sam Harris");
