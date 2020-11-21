let inputvowel = document.getElementById('vowel_counting');
let vowelBtn = document.getElementById('submit');
let foundvowels = document.getElementById('existing_vowels');
vowelBtn.addEventListener('click', checkVowel);

const vowels = ["a", "e", "i", "o", "u"];



function checkVowel(e) {
    e.preventDefault();

    let counter = 0;

    for (let letter of inputvowel.value.toLowerCase() ){
        if (vowels.includes(letter)){
            counter ++;
        }
    }

       
    foundvowels.innerText = counter;
}