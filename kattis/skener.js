const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let state = "D";
let R = null;
let C = null;
let ZR = null;
let ZC = null;

rl.on('line', (line) => {
    if (state == "D") {
        stuff = line.split(' ');
        R = Number(stuff[0]);
        C = Number(stuff[1]);
        ZR = Number(stuff[2]);
        ZC = Number(stuff[3]);
        state = 'userIO';
    } else {
        characters = line.split("");
        let newc = [];
        for (const c of characters) {
            for (let i = 0; i < ZC; i++) {
                newc.push(c);
            }
        }
        for (let i = 0; i < ZR; i++) {
            console.log(newc.join(""));
        }
    }
});
