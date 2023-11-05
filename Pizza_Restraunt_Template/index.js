'use strict';

let pizzaTitleElement = document.querySelector('.pizza');
let saladTitleElement = document.querySelector('.salads');
let starterTitleElement = document.querySelector('.starters');

let pizzaList = document.querySelector('.pizza-list');
let saladsList = document.querySelector('.salads-list');
let stratersList = document.querySelector('.straters-list');


pizzaTitleElement.addEventListener('click', function() {
    saladTitleElement.classList.remove('active');
    starterTitleElement.classList.remove('active');
    pizzaTitleElement.classList.add('active');
    saladsList.classList.add('hide');
    stratersList.classList.add('hide');
    pizzaList.classList.remove('hide');
});

saladTitleElement.addEventListener('click', function() {
    saladTitleElement.classList.add('active');
    pizzaTitleElement.classList.remove('active');
    starterTitleElement.classList.remove('active');
    pizzaList.classList.add('hide');
    stratersList.classList.add('hide');
    saladsList.classList.remove('hide');
})

starterTitleElement.addEventListener('click', function() {
    pizzaTitleElement.classList.remove('active');
    saladTitleElement.classList.remove('active');
    starterTitleElement.classList.add('active');
    pizzaList.classList.add('hide');
    saladsList.classList.add('hide');
    saladsList.classList.remove('hide');
})
