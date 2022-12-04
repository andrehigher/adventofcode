const fs = require('fs');

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    let amount = 0;
    data.split(/\r\n/).forEach(line =>  {
        const arr = line.split(',');
        const elf1 = arr[0].split('-');
        const elf2 = arr[1].split('-');
        // Dumb solution :D
        if ((parseInt(elf1[0]) >= parseInt(elf2[0]) && parseInt(elf1[0]) <= parseInt(elf2[1]))
            || (parseInt(elf1[1]) >= parseInt(elf2[0]) && parseInt(elf1[1]) <= parseInt(elf2[1]))
            || (parseInt(elf2[1]) >= parseInt(elf1[0]) && parseInt(elf2[1]) <= parseInt(elf1[1]))
            || (parseInt(elf2[1]) >= parseInt(elf1[0]) && parseInt(elf2[1]) <= parseInt(elf1[1]))) {
            console.log(`It's in ${elf1}:${elf2}`);
            amount++;
        }
    });
    console.log(`The amount is ${amount}.`);
} catch (err) {
    console.error(err);
}
