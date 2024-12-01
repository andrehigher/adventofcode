const fs = require('fs');

const convertItem = item => item === item.toUpperCase() ? item.charCodeAt() - 38 :  item.charCodeAt() - 96;

const getSameItems = rucksack => {
    for (const rucksackElement of rucksack[0]) {
        if (rucksack[1].includes(rucksackElement) && rucksack[2].includes(rucksackElement)) return convertItem(rucksackElement);
    }

    return 0;
}

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    let rucksack = [];
    let amount = 0;
    let idx = 0;
    data.split(/\r\n/).forEach(line =>  {
        if (idx === 3) {
           idx = 1;
           amount += getSameItems(rucksack);
           rucksack = [line];
        } else {
           rucksack.push(line);
           idx++;
        }

    });
    amount += getSameItems(rucksack);
    console.log(`The amount is ${amount}.`);
} catch (err) {
    console.error(err);
}
