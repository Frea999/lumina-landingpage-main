"use strict";

const speaker = [
    { src: 'img/speaker-rose.png' },
    { src: 'img/green1.png' },
    { src: 'img/white.png' },
    { src: 'img/lavender.png' },
];

document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('color-change-btn');
    const speakerImage = document.querySelector('.speaker-rose img');
    
    let currentColorIndex = 0;

    changeColorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1)
        speakerImage.src = speaker[currentColorIndex].src;
        
    });
});

