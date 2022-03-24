function beginningZeros(text) {
    var numArr = text.split('');
    var numberOfZeros = 0;
    for (var i = 0; i < text.length; i++) {
        if (numArr[i] === '0') {
            numberOfZeros++;
        }
        else {
            break;
        }
    }
    return numberOfZeros;
}
console.log(beginningZeros('100'));
console.log(beginningZeros('001'));
