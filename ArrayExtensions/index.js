
exports.removeDuplicates = (list, identifier = undefined) => {
    if(identifier == undefined) {
        return require('./removeDuplicates').removeDuplicatesWithoutIdentifier(list);
    } else if (list[0][identifier]) {
        return require('./removeDuplicates').removeDuplicatesWithIdentifier(list, identifier);
    } else {
        throw new Error('Can\'t remove duplicates. Error in parameters');
    }
}

