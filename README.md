# JS camelCase Converter

This project provides a simple JavaScript tool to convert text strings into camelCase format, which is commonly used in programming for naming variables and functions...

## Features

- Convert any string to camelCase.
- Handles various input formats, including spaces, hyphens, and underscores.
- Ignores non-alphabetic characters and properly capitalizes letters after spaces.

## Demo

Check out the live demo [here](https://qyuzet.github.io/js-camelCase-converter).

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Qyuzet/js-camelCase-converter.git
    ```
2. Navigate to the project directory:
    ```sh
    cd js-camelCase-converter
    ```

## Usage

Open `index.html` in your preferred browser to use the camelCase converter.

## JavaScript Snippet Explanation

### Conversion Logic
```javascript
function toCamelCase(str) {
  return str
    .replace(/[-_ ](.)/g, (match, group1) => group1.toUpperCase())
    .replace(/[-_ ]/g, '');
}
```
- The `toCamelCase` function converts a string to camelCase.
- It replaces any spaces, hyphens, or underscores with an empty string and capitalizes the character immediately following these characters.

### Event Listener
```javascript
document.getElementById("convert-btn").addEventListener("click", () => {
  const input = document.getElementById("input-text").value;
  const output = toCamelCase(input);
  document.getElementById("output-text").innerText = output;
});
```
- Adds a click event listener to the "Convert" button.
- On click, the input text is converted to camelCase and displayed in the output area.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
