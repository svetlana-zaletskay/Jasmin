exports.hey = function (commandBob) {

    var result;

    switch (commandBob){
        case 'hello':
            result = 'Sure';
            break;
        case 'shouting':
            result = 'Whoa, chill out!';
            break;
        case 'silence':
            result = 'Fine. Be that way!';
            break;
        default:
            result = 'Whatever.';
            break;
    }
};
