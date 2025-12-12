// VÄRIN VAIHTO FUNKTIO

// Otetaan class nimet kaikista elementeistä
const paletteItems = document.querySelectorAll('.palette');
const targetDivs = document.querySelectorAll('.color-box');
const resetColorButton = document.getElementById('resetColorButton');

// Funktio jolla vaihdetaan seinän väri
paletteItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedColor = item.getAttribute('data-color');
    targetDivs.forEach(div => {
      div.style.backgroundColor = selectedColor;
    });
  });
});

// Funktio värin poistamiseen
resetColorButton.addEventListener('click', () => {
  targetDivs.forEach(div => {
    div.style.backgroundColor = '';
  });
});


// USEIN KYSYTYT KYSYMYKSET OSIOIDEN VASTAUKSET

// Määritellään class nimet
const questions = document.querySelectorAll('.question');

// Lisätään onclick funktio
questions.forEach(question => {
    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});