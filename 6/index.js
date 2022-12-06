const fs = require('fs');

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    const arr = [];
    let position = 0;
    data.split(/\r?\n/).forEach(line =>  {
        const buffer = line.split('');
        for (let i = 0; i < buffer.length; i++) {
            if (arr.length === 4) {
                break;
            }
            if (arr.includes(buffer[i])) {
                let j = 0;
                while (arr[j] !== buffer[i]) {
                    arr.shift();
                }
                arr.shift();
            }
            arr.push(buffer[i]);
            position = i;
        }
        console.log('The position is', position + 1);
    });
} catch (err) {
    console.error(err);
}