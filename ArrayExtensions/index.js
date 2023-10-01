/////////////////////////
/// REMOVE DUPLICATES ///
/////////////////////////

exports.removeDuplicates = (list, identifier = undefined) => {
    if(identifier == undefined) {
        return removeDuplicatesWithoutIdentifier(list);
    } else if (list[0][identifier]) {
        return removeDuplicatesWithIdentifier(list, identifier);
    } else {
        throw new Error('Can\'t remove duplicates. Error in parameters');
    }
}


removeDuplicatesWithIdentifier = (list, identifier) => {
    const newList = [];

    list.forEach(entry => {
        if(!newList.map(x => x[identifier]).includes(entry[identifier])) {
            newList.push(entry);
        }   
    });
    return newList;   
}

removeDuplicatesWithoutIdentifier = (list) => {
    const newList = [];

    list.forEach(entry => {
        if(!newList.includes(entry)) {
            newList.push(entry);
        }   
    });
    return newList;   
}