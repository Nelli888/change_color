'use strict'

const button = document.querySelector('.main__btn');
button.addEventListener('click', changeColor);

const background = document.querySelector('.main');
const text = document.querySelector('.main__text');

function changeColor() {
    const random = '#' + Math.random().toString(16).slice(2,8);
    background.style.backgroundColor = random;
    text.innerText = random;
    text.style.color = random;
}