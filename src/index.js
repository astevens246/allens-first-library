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

const kebobCase = (str) => {
    str = str.toLowerCase(); 
    let words = str.split('');

    words = words.filter(word => {
        let charCode = word.charCodeAt(0);
        return (charCode === 32 || (charCode >= 48 && charCode <= 57) ||(charCode >=  7 && charCode <= 122) || (charCode === 45));
    }
    );
    return removeExtraSpaces(words.join('')).replace(/\s/g, '-');

}

console.log(kebobCase('   Hello    world my name is allen  '));

// Challenge 6
// snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.

// Example: "  what the    heck   " -> "what_the_heck"

const snakeCase = (str, separator) => {
    str = str.toLowerCase(); 
    let words = str.split('');

    words = words.filter(word => {
        let charCode = word.charCodeAt(0);
        return (charCode === 32 || (charCode >= 48 && charCode <= 57) ||(charCode >=  7 && charCode <= 122) || (charCode === 45));
    }
    );
    return removeExtraSpaces(words.join('')).replace(/\s/g, separator);
}

console.log(snakeCase(' what    in      the world  ', '_'));

// Challenge 7
// camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.

// Example: Camel Case -> camelCase

const camelCase = (str) => {
    let phrase = str.toLowerCase().split(' ');
    if (phrase.length > 1) {
        phrase[1] = capitalize(phrase[1]);
    }
    return phrase.join('');
}

// Test cases
console.log(camelCase('hello world'));

