const fs = require('fs');

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    let amount = 0;
    data.split(/\r\n/).forEach(line =>  {
       const arr = line.split(',');
       const range1 = arr[0].split('-');
       const range2 = arr[1].split('-');
       if ((parseInt(range1[0]) <= parseInt(range2[0]) && parseInt(range1[1]) >= parseInt(range2[1])) || (parseInt(range2[0]) <= parseInt(range1[0]) && parseInt(range2[1]) >= parseInt(range1[1]))) {
           amount++;
       }
    });
    console.log(`The amount is ${amount}.`);
} catch (err) {
    console.error(err);
}
