const FileReader = require('./FileReader.js');
const FileWriter = require('./FileWriter.js');

//////////////////
/// FileReader ///
//////////////////
exports.readFile = async (filename, type) => {
    const data = await FileReader.readFile(filename, type);
    return data;
}


//////////////////
/// FileWriter ///
//////////////////
exports.writeFile = (data, filename, type, params) => {
    switch(type.toLowerCase()) {
        case "json": 
            FileWriter.writeJsonToFile([data], filename, params.appendFile)
            break;
        case "jsonl": 
            FileWriter.writeJsonToFile(data, filename, params.appendFile)
            break;
    }
}
