// script.js

// Get references to input and display elements
const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('nameDisplay');

// Update nameDisplay when the input value changes
nameInput.addEventListener('input', function() {
    nameDisplay.textContent = nameInput.value || 'ストライク'; // Default to "ストライク" if input is empty
});

// Update lvlDisplay when the input value changes
lvlInput.addEventListener('input', function() {
    lvlDisplay.textContent = 'Lv.' + (lvlInput.value || '25'); // Default to "25" if input is empty
});

// Update lvlDisplay when the input value changes
hpInput.addEventListener('input', function() {
    hpDisplay.textContent = 'HP ' + (hpInput.value || '70'); // Default to "70" if input is empty
});

// Update descDisplay when the input value changes
descInput.addEventListener('input', function() {
    descDisplay.textContent = descInput.value || 'カマキリポケモン'; // Default to "カマキリポケモン" if input is empty
});

// Get the image URL input and the character image element
const imgUrlInput = document.getElementById('imgUrlInput');
const characterImage = document.querySelector('.character img');

// Update character image when the input value changes
imgUrlInput.addEventListener('input', function() {
    const imageUrl = imgUrlInput.value || 'default-image.webp'; // Default to a fallback image if input is empty
    characterImage.src = imageUrl;
});

// Update noDisplay when the input value changes
noInput.addEventListener('input', function() {
    noDisplay.textContent = 'No.' + (noInput.value || '123'); // Default to "No.123" if input is empty
});

// Update heightDisplay when the input value changes
heightInput.addEventListener('input', function() {
    heightDisplay.textContent = '高さ' + (heightInput.value || '123') + 'm'; // Default to "No.123" if input is empty
});

// Update weightDisplay when the input value changes
weightInput.addEventListener('input', function() {
    weightDisplay.textContent = '重さ' + (weightInput.value || '56.0') + 'kg'; // Default to "No.123" if input is empty
});

// Update journalDisplay when the input value changes
journalInput.addEventListener('input', function() {
    journalDisplay.textContent = journalInput.value || '忍者のような敏捷性とスピードで、複数存在するような錯覚を起こすことができます。'; // Default to "忍者のような敏捷性とスピードで、複数存在するような錯覚を起こすことができます。" if input is empty
});

// Update attack1Display when the input value changes
attack1Input.addEventListener('input', function() {
    attack1Display.textContent = attack1Input.value || '剣の強さ'; // Default to "剣の強さ" if input is empty
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
    attack2Display.textContent = attack2Input.value || '切り分ける ';
});

// Update attack2descDisplay when the input value changes
attack2descInput.addEventListener('input', function() {
    attack2descDisplay.textContent = attack2descInput.value || ' ';
});

// Update attack2dmgDisplay when the input value changes
attack2dmgInput.addEventListener('input', function() {
    attack2dmgDisplay.textContent = attack2dmgInput.value || '30';
});

// Select all checkboxes and the display area
const advantageTypeCheckboxes = document.querySelectorAll('input[name="advantageType"]');
const weaknessTypeCheckboxes = document.querySelectorAll('input[name="weaknessType"]');
const advantageTypeDisplay = document.getElementById('advantageTypeDisplay');
const weaknessTypeDisplay = document.getElementById('weaknessTypeDisplay');

// Add event listeners to each checkbox
advantageTypeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Create an array to hold the selected values
        const selectedValues = [];

        // Check each checkbox to see if it's checked
        advantageTypeCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                // Push corresponding values into the array
                if (checkbox.value === 'Grass') {
                    selectedValues.push('<span class="advantage_energy_others">草</span>');
                } else if (checkbox.value === 'Bug') {
                    selectedValues.push('<span class="advantage_energy_others">虫</span>');
                } else if (checkbox.value === 'Water') {
                    selectedValues.push('<span class="advantage_energy_others">水</span>');
                } else if (checkbox.value === 'Fire') {
                    selectedValues.push('<span class="advantage_energy_others">火</span>');
                } else if (checkbox.value === 'Electric') {
                    selectedValues.push('<span class="advantage_energy_others">電</span>');
                } else if (checkbox.value === 'Ghost') {
                    selectedValues.push('<span class="advantage_energy_others">幽</span>');
                } else if (checkbox.value === 'Flying') {
                    selectedValues.push('<span class="advantage_energy_others">飛</span>');
                } else if (checkbox.value === 'Ground') {
                    selectedValues.push('<span class="advantage_energy_others">地</span>');
                } else if (checkbox.value === 'Fighting') {
                    selectedValues.push('<span class="advantage_energy_others">闘</span>');
                } else if (checkbox.value === 'Psychic') {
                    selectedValues.push('<span class="advantage_energy_others">超</span>');
                } else if (checkbox.value === 'Poison') {
                    selectedValues.push('<span class="advantage_energy_others">毒</span>');
                } else if (checkbox.value === 'Dragon') {
                    selectedValues.push('<span class="advantage_energy_others">竜</span>');
                } else if (checkbox.value === 'Normal') {
                    selectedValues.push('<span class="advantage_energy_normal"></span>');
                }
            }
        });

        // Update the display with selected values or a default message if none are selected
        advantageTypeDisplay.innerHTML = selectedValues.length ? selectedValues.join(' ') : '<span class="advantage_energy_normal"></span>';
    });
});

// Add event listeners to each weakness checkbox
weaknessTypeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Create an array to hold the selected values
        const selectedValues2 = [];

        // Check each checkbox to see if it's checked
        weaknessTypeCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                // Push corresponding values into the array
                if (checkbox.value === 'Grass') {
                    selectedValues2.push('<span class="advantage_energy_others">草</span>');
                } else if (checkbox.value === 'Bug') {
                    selectedValues2.push('<span class="advantage_energy_others">虫</span>');
                } else if (checkbox.value === 'Water') {
                    selectedValues2.push('<span class="advantage_energy_others">水</span>');
                } else if (checkbox.value === 'Fire') {
                    selectedValues2.push('<span class="advantage_energy_others">火</span>');
                } else if (checkbox.value === 'Electric') {
                    selectedValues2.push('<span class="advantage_energy_others">電</span>');
                } else if (checkbox.value === 'Ghost') {
                    selectedValues2.push('<span class="advantage_energy_others">幽</span>');
                } else if (checkbox.value === 'Flying') {
                    selectedValues2.push('<span class="advantage_energy_others">飛</span>');
                } else if (checkbox.value === 'Ground') {
                    selectedValues2.push('<span class="advantage_energy_others">地</span>');
                } else if (checkbox.value === 'Fighting') {
                    selectedValues2.push('<span class="advantage_energy_others">闘</span>');
                } else if (checkbox.value === 'Psychic') {
                    selectedValues2.push('<span class="advantage_energy_others">超</span>');
                } else if (checkbox.value === 'Poison') {
                    selectedValues2.push('<span class="advantage_energy_others">毒</span>');
                } else if (checkbox.value === 'Dragon') {
                    selectedValues2.push('<span class="advantage_energy_others">竜</span>');
                } else if (checkbox.value === 'Normal') {
                    selectedValues2.push('<span class="advantage_energy_normal"></span>');
                }
            }
        });

        // Update the display with selected values or a default message if none are selected
        weaknessTypeDisplay.innerHTML = selectedValues2.length ? selectedValues2.join(' ') : '<span class="advantage_energy_normal"></span>';
    });
});

