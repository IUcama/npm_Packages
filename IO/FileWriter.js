const {JSDOM } = require('jsdom');
const fs = require('fs');

exports.writeJsonToFile = (data=[], filename="export.jsonl", appendFile=false) => {
    const params = {};
    if (appendFile) {
        params.flags = "a";
    }
    
    var stream = fs.createWriteStream(filename, params);
            stream.once('open', function(fd) {
                data.forEach(async entry => {
                    const entryAsJSON = JSON.stringify(entry);
                    stream.write(entryAsJSON);
                    stream.write('\n');
                })
                stream.end();
            });
}