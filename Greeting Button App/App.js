const morningBtn = document.querySelector('#morning');
const dayBtn = document.querySelector('#day');
const afternoonBtn = document.querySelector('#afternoon');
const eveningBtn = document.querySelector('#evening');
const nightBtn = document.querySelector('#night');
const greeting = document.querySelector('#greeting');

morningBtn.addEventListener('click',(event) => {greeting.innerText = 'Good Morning'})

dayBtn.addEventListener('click',(event) => {greeting.innerText = 'Good Day'})

afternoonBtn.addEventListener('click',(event) => {greeting.innerText = 'Good Afternoon'})

eveningBtn.addEventListener('click',(event) =>  {greeting.innerText = 'Good Evening'})

nightBtn.addEventListener('click',(event) => {greeting.innerText = 'Good Night'});