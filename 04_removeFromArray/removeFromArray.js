const removeFromArray = function(arr, ...arrElemsToRemove) {
    return arr.filter(item => !arrElemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
