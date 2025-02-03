// Strings declare in double or single quotes;
const name = "Aman Kr";
const repoCount = 80;
//console.log(`My name is ${name} and my repo cont is ${repoCount}`);

// declaring string as objects
const hi = new String("hello Aman ");
// console.log(hi.charAt(4));
// console.log(hi.length);
// console.log(hi.toUpperCase());
// console.log(hi.toLowerCase());
// console.log(hi.indexOf('o'));

// best method to know all the prototypes of string is go to console and

const another = hi.substring(0, 4); // hell end is excluded
const another1 = hi.slice(0, 4); // hell but it accepted negative value as well...
// console.log(another);
// console.log(another1)

// str.trim()=> trim whitespace of start and end;
// also trimStart()  and trimEnd method..

// str.replace('x','-') x replace with -;

// str.includes() // existence
// str.split(' ')// return list of array on basis of " ", and separator




// Basic Properties
// length - Returns the length of the string.
// Character Access Methods
// charAt(index) - Returns the character at a specified index.
// charCodeAt(index) - Returns the Unicode of the character at a specified index.
// codePointAt(index) - Returns the Unicode code point at the given position.
// String Modification & Concatenation
// concat(string2, ...) - Joins two or more strings.
// repeat(count) - Repeats the string a specified number of times.
// Case Manipulation
// toLowerCase() - Converts the string to lowercase.
// toUpperCase() - Converts the string to uppercase.
// toLocaleLowerCase() - Converts to lowercase based on locale.
// toLocaleUpperCase() - Converts to uppercase based on locale.
// Substring Extraction
// slice(start, end) - Extracts a portion of a string.
// substring(start, end) - Similar to slice(), but doesn’t accept negative indexes.
// substr(start, length) - Extracts part of a string, starting at a specified index and extending for a given number of characters.
// String Searching
// indexOf(searchValue, fromIndex) - Returns the position of the first occurrence.
// lastIndexOf(searchValue, fromIndex) - Returns the last occurrence.
// search(regex) - Searches using a regular expression and returns the first match index.
// match(regex) - Returns an array of matched results using regex.
// matchAll(regex) - Returns all matches as an iterator.
// includes(searchValue, fromIndex) - Checks if the string contains a substring.
// startsWith(searchString, position) - Checks if the string starts with a given substring.
// endsWith(searchString, length) - Checks if the string ends with a given substring.
// String Replacement
// replace(searchValue, newValue) - Replaces a substring with another string.
// replaceAll(searchValue, newValue) - Replaces all occurrences of a substring.
// String Splitting & Joining
// split(separator, limit) - Splits the string into an array.
// padStart(targetLength, padString) - Pads the beginning with specified characters.
// padEnd(targetLength, padString) - Pads the end with specified characters.
// Formatting (Deprecated or Rarely Used)
// big() - Formats text as <big>.
// blink() - Formats text as <blink> (Deprecated).
// bold() - Formats text as <b>.
// fixed() - Formats text as <tt>.
// fontcolor(color) - Sets font color using <font>.
// fontsize(size) - Sets font size using <font>.
// italics() - Formats text as <i>.
// link(url) - Creates an <a> hyperlink.
// small() - Formats text as <small>.
// strike() - Formats text as <strike>.
// sub() - Formats text as subscript <sub>.
// sup() - Formats text as superscript <sup>.
// Other Utility Methods
// normalize(form) - Normalizes Unicode characters.
// localeCompare(compareString) - Compares two strings in the current locale.
// isWellFormed() - Checks if the string is a well-formed UTF-16.
// toString() - Returns the string itself.
// anchor(name) - Creates an anchor <a> with a name


