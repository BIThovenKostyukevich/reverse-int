module.exports = function reverse(n) {
    const reversedString = Math.abs(n).toString().split('').reverse().join('');
    
    const reversedNumber = parseInt(reversedString);

    return reversedNumber;
};
