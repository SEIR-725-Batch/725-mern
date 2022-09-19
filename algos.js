const prime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

console.log(prime(7))
console.log(prime(11))
console.log(prime(15))
console.log(prime(120))

const palindrome = (word) => {
    // let reverse = word.split('').reverse().join('');
    // if (reverse === word) return true;
    // else return false;
    // return word === word.split('').reverse().join('');
    for(let i = 0; i < word.length / 2; i++) {
        if(word[i] !== word[word.length - 1 - i]) return false;
    }
    return true;
}