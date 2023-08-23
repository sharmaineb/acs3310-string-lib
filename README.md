### String-Lib

[<img src="https://img.shields.io/badge/ESLint-Passed-brightgreen" alt="ESLint">](https://www.npmjs.com/package/@sharshar/string-lib)

[npm package link](https://www.npmjs.com/package/@sharshar/string-lib)

This repository contains a collection of JavaScript functions that perform various string manipulation tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Function List](#function-list)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this library using npm:

```bash
npm install string-lib
```

## Usage

1. **Import the functions:**

    ```javascript
    const {
      capitalize,
      allCaps,
      capitalizeWords,
      removeExtraSpaces,
      kebob,
      snake,
      camelCase,
      shift,
      makeHashTag,
      isEmpty,
    } = require('../src/index');
    ```

2. **Call the functions with appropriate inputs:**

    ```javascript
    const inputString = "hello world";

    const capitalizedString = capitalize(inputString);
    console.log(capitalizedString); // Output: "Hello world"

    const allCapsString = allCaps(inputString);
    console.log(allCapsString); // Output: "HELLO WORLD"

    ```
## Function List

- `capitalize(str)`: Capitalizes the first character of a given string.
- `allCaps(str)`: Converts all characters in a string to uppercase.
- `capitalizeWords(str)`: Capitalizes the first character of each word in a string.
- `removeExtraSpaces(str)`: Removes extra spaces from a string and replaces multiple spaces with a single space.
- `kebob(str, separator)`: Converts a string to kebab case (lowercase with hyphens).
- `snake(str)`: Converts a string to snake case (lowercase with underscores).
- `camelCase(str)`: Converts a string to camel case (lowercase first word, uppercase others).
- `shift(str)`: Moves the first character of a string to the end.
- `makeHashTag(str)`: Converts a string into an array of hash tags.
- `isEmpty(str)`: Checks if a string is empty or contains only whitespace.

## Examples

```javascript
const inputString = "   Hello    world!   ";

const trimmedString = removeExtraSpaces(inputString);
console.log(trimmedString); // Output: "Hello world!"

const hashTags = makeHashTag("Amazing bongo drums for sale");
console.log(hashTags); // Output: ['#amazing', '#bongo', '#drums']
```




