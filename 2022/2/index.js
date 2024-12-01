const fs = require('fs');

const map = {
    'X': 1,
    'Y': 2,
    'Z': 3
};
const getResult = (playerFirst, playerSecond) => {
    if (playerFirst === 'A') {
        if (playerSecond === 'Y') return 6 + map[playerSecond];
        else if (playerSecond === 'X') return 3 + map[playerSecond];
        else return 0 + map[playerSecond];
    } else if (playerFirst === 'B') {
        if (playerSecond === 'Y') return 3 + map[playerSecond];
        else if (playerSecond === 'X') return 0 + map[playerSecond];
        else return 6 + map[playerSecond];
    } else {
        if (playerSecond === 'Y') return 0 + map[playerSecond];
        else if (playerSecond === 'X') return 6 + map[playerSecond];
        else return 3 + map[playerSecond];
    }
}

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    let points = 0;
    data.split(/\r\n/).forEach(line =>  {
        const attr = line.split(' ');
        points += getResult(attr[0], attr[1]);
    });
    console.log(`Total of ${points} points.`);
} catch (err) {
    console.error(err);
}
