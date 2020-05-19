function points(games) {
    let pointsOfChamp = 0;
    for (let i = 0; i < games.length; i++) {
        let arrForCheck = games[i].split(':');
        if (+arrForCheck[0] > +arrForCheck[1]) {
            pointsOfChamp += 3;
        } else if (+arrForCheck[0] < +arrForCheck[1]) {
            pointsOfChamp += 0;
        } else if (+arrForCheck[0] === +arrForCheck[1]) {
            pointsOfChamp += 1;
        }
    }
    return pointsOfChamp;
}

points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']);
