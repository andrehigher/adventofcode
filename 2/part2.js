const fs = require('fs');

// A = Rock
// B = Paper
// C = Scissors

const elementsMap = {
    'A': 1,
    'B': 2,
    'C': 3
};

const map = {
    'X': 1, // Lose
    'Y': 2, // Draw
    'Z': 3  // Win
};
const getResult = (playerFirst, playerSecond) => {
    if (playerFirst === 'A') {
        if (playerSecond === 'Y') return 3 + elementsMap['A'];
        else if (playerSecond === 'X') return 0 + elementsMap['C'];
        else return 6 + elementsMap['B'];
    } else if (playerFirst === 'B') {
        if (playerSecond === 'Y') return 3 + elementsMap['B'];
        else if (playerSecond === 'X') return 0 + elementsMap['A'];
        else return 6 + elementsMap['C'];
    } else {
        if (playerSecond === 'Y') return 3 + elementsMap['C'];
        else if (playerSecond === 'X') return 0 + elementsMap['B'];
        else return 6 + elementsMap['A'];
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
