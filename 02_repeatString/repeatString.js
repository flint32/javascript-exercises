const repeatString = function(str, strRepeatCount) {
    if(strRepeatCount < 0) return "ERROR";

    let resultStr = "";


    for(let i = 0; i < strRepeatCount; i++) {
        resultStr += str;
    }

    return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
