// 2.  Build your own function that takes a single string argument 
//     and returns the largest word in the string. 
//     If there are two or more words  that are the same length, 
//     return the first word from the string with that  length.
// e.g. if Input is: "this is a javascript string demo" 
//         Output will be: javascript

function firstLargestWord(input) {
    
    let maxWord = "";
    let currentWord = "";

    //  determine if a character is a space
    function isSpace(char) {
        return char === ' ';
    }

     // Loop through each character in the input string
    for (let i = 0; i <= input.length; i++) {
    // Check if the current character is a space or we have reached the end of the string      
        if (i === input.length || isSpace(input[i])) {
            // Compare the length of the current word with the maximum word found so far
            if (currentWord.length > maxWord.length) {
                maxWord = currentWord;
            }
            /// Reset currentWord to start taking the next word
            currentWord = "";
        } else {
            // Append the current character to build the current word
            currentWord += input[i];
        }
    }

    return maxWord;
}

const input = prompt("Enter a sentence to find the largest word:");
const largestWord = firstLargestWord(input);
console.log("The First largest word is:", largestWord);


// this is a javascript string demo;

