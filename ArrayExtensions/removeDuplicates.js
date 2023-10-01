exports.removeDuplicateWithIdentifier = (list, identifier) => {
    const newList = [];

    list.forEach(entry => {
        if(!newList.map(x => x[identifier]).includes(entry[identifier])) {
            newList.push(entry);
        }   
    });
    return newList;   
}

exports.removeDuplicateWithoutIdentifier = (list) => {
    const newList = [];

    list.forEach(entry => {
        if(!newList.includes(entry)) {
            newList.push(entry);
        }   
    });
    return newList;   
}