module.exports = {
    createObject
}
function createObject(params, data) {
    const nestedObject = {};
    // Initialize a reference to the current object
    let currentObject = nestedObject;
    const keysList = params.split('/');
    for (let i = 0; i < keysList.length - 1; i++) {
        const key = keysList[i];
        currentObject[key] = {};
        currentObject = currentObject[key]
    }
    const finalKey = keysList[keysList.length - 1];

    currentObject[finalKey] = data;

    return nestedObject;
}
