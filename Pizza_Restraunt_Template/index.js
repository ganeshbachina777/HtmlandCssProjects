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
});

starterTitleElement.addEventListener('click', function() {
    pizzaTitleElement.classList.remove('active');
    saladTitleElement.classList.remove('active');
    starterTitleElement.classList.add('active');
    pizzaList.classList.add('hide');
    saladsList.classList.add('hide');
    saladsList.classList.remove('hide');
});

// get the form elements
let formSubmitMessage = document.querySelector('#submit');
let customerName = document.querySelector('#name');
let noOfPeople = document.querySelector('#count');
let date = document.querySelector('#date');
let message = document.querySelector('#message');

formSubmitMessage.addEventListener('click', function() {
    alert(`Hi ${customerName.value}, you have successfully booked a table for ${noOfPeople.value} members!`);
    customerName.value = '';
    noOfPeople.value = '';
    date.value = '';
    message.value = '';
})

