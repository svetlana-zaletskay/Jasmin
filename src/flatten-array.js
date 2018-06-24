exports.flatten = function (target, result) {
    if(result === null){
        result = [];
    }
    for (var i = 0; i < target.length; i++) {
        if (target[i] instanceof Array) {
            exports.flatten(target[i],result);
        } else if (target[i] != null) {
            result.push(target[i]);
        }
    }
    return result;
};
