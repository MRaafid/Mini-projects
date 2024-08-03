//Selector type
const siteTitle = document.getElementById('site-title');
const navBar = document.getElementsByTagName('li');
const par = document.getElementsByClassName('content-text');
const title = document.querySelector('#site-description');
const Content = document.querySelector('.content')
const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');

// Manupulation
siteTitle.innerText = 'Dynamic Space Tech';

for (const element of navBar) {
    element.innerText = `-- ${element.innerText}--`
};

for (const element of par) {
    element.innerText = `${element.innerText.toUpperCase()}`
};

title.innerText = title.innerText.replace('DynTech LLC','Dynamic Space Tech');

Content.style.backgroundColor = '#B5C0D0';
Content.style.textAlign = 'justify';


for (const element of altNavs) {
    element.style.backgroundColor = '#686D76'
};