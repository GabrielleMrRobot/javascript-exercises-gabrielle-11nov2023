const repeatString = function(cadena, n) {
    let result= "";
    for (let i = 0; i < n; i++){
      result += cadena;
    }
    if (n < 0){
      result = 'ERROR'

    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
