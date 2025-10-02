const button = document.getElementById('check-btn');
let input = document.getElementById('text-input');
let result = document.getElementById('result');

function isPalindrome(word) {
    let clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('')
}

function getPalindrome(text) {
    let palindromes = '';
    let notPalindromes = ''
    text.forEach(word => {
        if (isPalindrome(word)) {
            palindromes += word + ' '
        }
        else{
            notPalindromes += word + ' '
        }
        

    })
    result.innerHTML = `
    <strong>Palindromes:</strong> <em>${palindromes.trim()}</em><br>
    <strong>Not Palindromes:</strong> <em>${notPalindromes.trim()}</em>
    `
}

button.addEventListener('click', () => getPalindrome(input.value.split(' ')))