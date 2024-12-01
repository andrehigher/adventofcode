const fs = require('fs');

const graph = {};

try {
    const data = fs.readFileSync('example.txt', 'utf8');
    let listing = false;
    data.split(/\r?\n/).forEach(line =>  {
        console.log(line);
        if (line.startsWith('$')) {
            if (line.contains('ls')) {
                listing = true;
            } else {
                listing = false;
                
            }
        } else {

        }
    });
} catch (err) {
    console.error(err);
}
