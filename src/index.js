// Challenge 1
// makes the first character of a given string uppercase
// example: hello world --> Hello world

function capitalize(str) {
  if (str === '') {
    return '';
  }
  const first = str[0].toUpperCase();
  const rest = str.slice(1);
  return first + rest;
}

// Challenge 2
// makes all characters uppercase
// example: foo bar --> FOO BAR

function allCaps(str) {
  return str.toUpperCase();
}

// Challenge 3
// makes the first character of each word uppercase.
// example: do all the things --> Do All The Things

function capitalizeWords(str) {
  const words = str.split(' ');
  const upperWords = words.map((word) => capitalize(word));
  return upperWords.join(' ');
}

// Challenge 4
// removes all spaces from the beginning and end of a
// string along with any extra spaces in the middle.
// if more than one space appears in the middle of a string it is replaced by a single space.
// example: "   Hello    world!   " --> "Hello world!"

function removeExtraSpaces(str) {
  const trimmed = str.trim();
  const words = trimmed.split(' ');
  const filtered = words.filter((word) => word !== '');
  return filtered.join(' ');
}

// Challenge 5
// removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
// example: "   Hello    world   " --> "hello-world"

function kebob(str, separator = '-') {
  // lowercase
  const lower = str.toLowerCase();
  // split ''
  const chars = lower.split('');
  // filter
  const filtered = chars.filter((c) => {
    const code = c.charCodeAt(0);
    if (code > 96 && code < 123) { // letters
      return true;
    } if (code > 47 && code < 58) { // keep numbers
      return true;
    } if (code === 32 || code === separator.charCodeAt(0)) { // keep space and hyphen
      return true;
    }
    return false;
  });
    // remove extra spaces
  const spaceFree = removeExtraSpaces(filtered.join(''));
  // split, join, and return
  return spaceFree.split(' ').join(separator);
}

// Challenge 6
// removes extra space and replaces spaces with an underscore "_",
// and makes all characters lowercase.
// example: "  what the    heck   " --> "what_the_heck"

function snake(str) {
  return kebob(str, '_');
}

// Challenge 7
// lowercases the first character of the first word.
// Then uppercases the first character of all other words, and removes all spaces.
// example: Camel Case --> camelCase

function camelCase(str) {
  // split on ' '
  const words = str.split(' ');
  // loop over the words
  const camelWords = words.map((word, i) => {
    // lowercase first word
    if (i === 0) {
      return word.toLowerCase();
    }
    // uppercase other words
    return capitalize(word);
  });
    // join words on ''
  return camelWords.join('');
}

// Challenge 8
// take the first character of a string and move to the end of a string.
// example: Hello World --> ello WorldH

function shift(str) {
  if (str.length <= 1) {
    return str;
  }
  const first = str[0];
  const rest = str.slice(1);
  return rest + first;
}

// Challenge 9
// convert the given string to a hash tag. each word in the phrase begins with an uppercase letter.
// example:
// input: "Amazing bongo drums for sale"
// output: ['#amazing', '#bongo', '#drums']

function makeHashTag(str) {
  const words = str.split(' ');
  // sort words by length in descending order
  const sortedWords = words.sort((a, b) => b.length - a.length);
  // filter out empty words and take the first three longest words
  const nonEmptyWords = sortedWords.filter((word) => word !== '');
  const hashTags = nonEmptyWords.slice(0, 3).map((word) => `#${word.toLowerCase()}`);
  return hashTags;
}

// Challenge 10
// returns true if the given string is empty or contains only whitespace.
// example:
// input: "Abc def"
// output: isEmpty("Abc def") // false

function isEmpty(str) {
  // trim whitespace from both ends of the string
  const trimmedStr = str.trim();
  // loop over the remaining characters
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < trimmedStr.length; i++) {
    const char = trimmedStr[i];
    // check if the character is not a whitespace character (\n, \r, \t)
    if (char !== '\n' && char !== '\r' && char !== '\t') {
      // the string contains non-whitespace characters
      return false;
    }
  }
  // the string is empty or contains only whitespace
  return true;
}

// exports

module.exports = {
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
};
