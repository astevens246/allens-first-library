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