/**
 * Given a paragraph, return a new paragraph where the first letter of each sentence is capitilized
 * All other characters should be preserved
 * Sentences can end with a period(.), one or more question marks(?) or one or more exclamation points(!)
 */

function capitalize(paragraph){
    let mustCapt = true; // So that first letter in test case is Capitilized
    let result = '';

    for (let i =0; i < paragraph.length; i++){
        let currentChar = paragraph[i];
        if (mustCapt && /^[a-zA-Z]+$/.test(currentChar)){ //check if it is a letter
            result += currentChar.toUpperCase()
            mustCapt = false;
        }
        else if (['.', '!', '?'].includes(currentChar)){
            result += currentChar
            mustCapt = true
        }
        else{
            result += currentChar;
        }
    }
    return result
}

/**
 * Test Cases
 */
console.log(capitalize('this is a simple sentence.'))
console.log(capitalize('hi! how are you?'))
console.log(capitalize('what time is it? i am totally not late!'))
console.log(capitalize('what is your name? Are you gay?'))
console.log(capitalize('why are you gae??? skibidi toilet.'))
console.log(capitalize('my homework ate my dog. my dog stepped on a bee.'))
console.log(capitalize('the end is coming... so eat chocolate!'))