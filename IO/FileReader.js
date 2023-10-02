const readline = require('readline');
const fs = require('fs');

let lines = [];
let lineCounter = 0;

exports.readFile = async function readFile(path, type) {
    lines = [];
    lineCounter = 0;
    switch(type.toLowerCase()) {
        case "json":
        case "jsonl": await readJsonl(path); break;
        default: console.error("Unknown Type in readFile()");
    }
    return lines;
}

async function readJsonl(path) {


    const readJsonlPromise = new Promise((resolve, reject) => {

        const readInterface = readline.createInterface({
            input: fs.createReadStream(path),
            // to see progress, caution! very slow!
            // output: process.stdout, 
            console: false
        });
        
        readInterface.on('line', (line) => {
            lineCounter++;
            lines.push(JSON.parse(line));
        
            // to stop earlier
            // if(lineCounter == 10) {
            //     readInterface.close();
            // }
        });
        
        readInterface.on('close', resolve);
    })

    await Promise.all([readJsonlPromise]);
    console.info("Read Jsonl done", lines.length);
    return lines;
   
}