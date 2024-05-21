// Challenge 1
// capitalize() - makes the first character of a given string uppercase.
// Ex. capitalize('hello') => 'Hello'

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}
// Test cases
console.log(capitalize('hello'));
console.log(capitalize('allen'));

// Challenge 2
// allCaps() - makes all characters uppercase. (this is the same as str.toUpperCase())

// Example: foo bar -> FOO BAR

const allCaps = (str) => {
    return str.toUpperCase();
}
// Test cases
console.log(allCaps('hello world'));
console.log(allCaps('allen stevens'));

// Challenge 3
// capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space.

// Example: do all the things -> Do All The Things

const capitalizeWords = (str) => {
    let phrase = str.split(' ');
    let capitalizeWords = phrase.map(word => capitalize(word));
    return capitalizeWords.join(' ');
}

// Test cases
console.log(capitalizeWords('i love coding'));
console.log(capitalizeWords('my name is allen'));

// Challenge 4
// removeExtraSpaces() - Removes all spaces from the beginning and end of a 
// String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
const removeExtraSpaces = (str) => {
    str = str.trim();
    str = str.split(' ').filter(word => word !== '');
    return str.join(' ');
}

console.log(removeExtraSpaces('   i   love    coding    '));

// Challenge 5
// kebobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
// Example: "   Hello    world   " -> "hello-world"

