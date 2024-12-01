const fs = require('fs');

function isNumber(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

try {
    let max = 0;
    let temp = 0;
    const data = fs.readFileSync('input.txt', 'utf8');
    data.split(/\r?\n/).forEach((line, index) =>  {
        if(!isNumber(line)) {
            max = Math.max(max, temp);
            temp = 0;
        } else {
            temp += parseFloat(line);
        }
    });
    console.log(`The max is ${max}.`);
} catch (err) {
    console.error(err);
}
