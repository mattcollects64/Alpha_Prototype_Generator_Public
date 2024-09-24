// script.js

// Get references to input and display elements
const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('nameDisplay');

// Update nameDisplay when the input value changes
nameInput.addEventListener('input', function() {
    nameDisplay.textContent = nameInput.value || 'カードコレクター';
});

// Update lvlDisplay when the input value changes
lvlInput.addEventListener('input', function() {
    lvlDisplay.textContent = 'Lv.' + (lvlInput.value || '20');
});

// Update lvlDisplay when the input value changes
hpInput.addEventListener('input', function() {
    hpDisplay.textContent = 'HP ' + (hpInput.value || '70');
});

// Update descDisplay when the input value changes
descInput.addEventListener('input', function() {
    descDisplay.textContent = descInput.value || 'ちょっとオタクっぽい'; 
});

// Get the image URL input and the character image element
const imgUrlInput = document.getElementById('imgUrlInput');
const characterImage = document.querySelector('.character img');

// Update character image when the input value changes
imgUrlInput.addEventListener('input', function() {
    const imageUrl = imgUrlInput.value || 'img/character.webp'; // Default to a fallback image if input is empty
    characterImage.src = imageUrl;
});

// Update noDisplay when the input value changes
noInput.addEventListener('input', function() {
    noDisplay.textContent = 'No.' + (noInput.value || '123');
});

// Update heightDisplay when the input value changes
heightInput.addEventListener('input', function() {
    heightDisplay.textContent = '高さ' + (heightInput.value || '2.3') + 'm';
});

// Update weightDisplay when the input value changes
weightInput.addEventListener('input', function() {
    weightDisplay.textContent = '重さ' + (weightInput.value || '86.0') + 'kg';
});

// Update journalDisplay when the input value changes
journalInput.addEventListener('input', function() {
    journalDisplay.textContent = journalInput.value || '必要のない物を買うのが好きです。コンピューターが得意なこともあります。いい人です。';
});

// Update attack1Display when the input value changes
attack1Input.addEventListener('input', function() {
    attack1Display.textContent = attack1Input.value || 'キーボードで入力'; 
});

// Update attack1descDisplay when the input value changes
attack1descInput.addEventListener('input', function() {
    attack1descDisplay.textContent = attack1descInput.value || ' '; 
});

// Update attack1dmgDisplay when the input value changes
attack1dmgInput.addEventListener('input', function() {
    attack1dmgDisplay.textContent = attack1dmgInput.value || ' ';
});

// Update attack2Display when the input value changes
attack2Input.addEventListener('input', function() {
    attack2Display.textContent = attack2Input.value || '転倒する ';
});

// Update attack2descDisplay when the input value changes
attack2descInput.addEventListener('input', function() {
    attack2descDisplay.textContent = attack2descInput.value || ' ';
});

// Update attack2dmgDisplay when the input value changes
attack2dmgInput.addEventListener('input', function() {
    attack2dmgDisplay.textContent = attack2dmgInput.value || '30';
});