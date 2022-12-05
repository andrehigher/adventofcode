const fs = require('fs');

const fixStacks = stacks => {
    for (const stack of stacks) {
        stack.reverse();
    }
};
const moveStacks = (stacks, action) => {
    if (action === '') return;
    const move = action.split(' ');
    const amount = parseInt(move[1]);
    const from = parseInt(move[3]) - 1;
    const to = parseInt(move[5]) - 1;

    let idx = 0;
    let temp = [];
    while (idx < amount) {
        temp.push(stacks[from].pop());
        idx++;
    }
    temp.reverse();
    stacks[to].push(...temp);
};

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    let action = false;
    let stacks = [];
    data.split(/\r?\n/).forEach(line =>  {
        if ((!action && line === '') || action) {
            if (!action) {
                fixStacks(stacks);
                action = true;
            }
            moveStacks(stacks, line);
        } else {
            let idx = 0;
            for (let i = 0; i < line.length; i = i + 4) {
                const content = line[i+1];
                if (content !== ' ' && isNaN(parseInt(content))) {
                    if (!Array.isArray((stacks[idx]))) stacks[idx] = [];
                    stacks[idx].push(content);
                }
                idx++;
            }
        }
    });

    let resp = '';
    for (const stack of stacks) {
        resp += stack.pop();
    }
    console.log(`The response is ${resp}.`);
} catch (err) {
    console.error(err);
}
