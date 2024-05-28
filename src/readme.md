\`\`\`markdown
# Allen's First Library

![npm bundle size](https://img.shields.io/bundlephobia/min/%40astevens2024%2Fallens-first-library)

![GitHub package.json version](https://img.shields.io/github/package-json/v/astevens246/allens-first-library)

Allen's First Library is a string utility library. It provides a set of functions to manipulate and format strings in various ways.

## Installation

```sh
npm install @astevens2024/allens-first-library
\`\`\`

## Usage

Import the library in your JavaScript file:

\`\`\`javascript
const { capitalize, allCaps, capitalizeWords, removeExtraSpaces, kebobCase, snakeCase, camelCase, shift, makeHashTag, isEmpty } = require('@astevens2024/allens-first-library');
\`\`\`

Then, you can use the functions as follows:

\`\`\`javascript
let str = 'hello world';
let result = capitalize(str); // 'Hello world'
\`\`\`

## Functions

- `capitalize(str)`: Capitalizes the first letter of the string.
- `allCaps(str)`: Converts the string to uppercase.
- `capitalizeWords(str)`: Capitalizes the first letter of each word in the string.
- `removeExtraSpaces(str)`: Removes extra spaces from the string.
- `kebobCase(str)`: Converts the string to kebab-case.
- `snakeCase(str)`: Converts the string to snake_case.
- `camelCase(str)`: Converts the string to camelCase.
- `shift(str)`: Shifts the characters in the string.
- `makeHashTag(str)`: Converts the string into a hashtag.
- `isEmpty(str)`: Checks if the string is empty.

## Testing

To run the tests for the library, use the following command:

\`\`\`sh
npm run test
\`\`\`

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the ISC License.
\`\`\`