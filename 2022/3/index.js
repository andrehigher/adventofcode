const fs = require('fs');

const splitLine = str => {
    const middle = Math.floor(str.length / 2);
    const compartment1 = str.slice(0, middle);
    const compartment2 = str.slice(middle);
    return [compartment1, compartment2];
}

const convertItem = item => item === item.toUpperCase() ? item.charCodeAt() - 38 :  item.charCodeAt() - 96;

const getSameItems = compartments => {
    for (const item of compartments[0]){
        if (compartments[1].includes(item)) {
            return convertItem(item);
        }
    }

    return 0;
}

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    let amount = 0;
    data.split(/\r\n/).forEach(line =>  {
        const compartments = splitLine(line);
        amount += getSameItems(compartments);
    });
    console.log(`The amount is ${amount}.`);
} catch (err) {
    console.error(err);
}
