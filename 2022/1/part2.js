const fs = require('fs');

function isNumber(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

try {
    let max = [];
    let temp = 0;
    const data = fs.readFileSync('input.txt', 'utf8');
    data.split(/\r?\n/).forEach((line, index) =>  {
        if(!isNumber(line)) {
            max.push(temp);
            if (max.length > 3) {
                max = max.sort((a,b) => a - b);
                max.shift();
            }
            temp = 0;
        } else {
            temp += parseFloat(line);
        }
    });
    max.push(temp);
    if (max.length > 3) {
        max = max.sort((a,b) => a - b);
        max.shift();
    }
    console.log(`The max is ${max}, and the sum is ${max.reduce((partialSum, a) => partialSum + a, 0)}.`);
} catch (err) {
    console.error(err);
}
