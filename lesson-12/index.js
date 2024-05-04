const catElement = document.getElementById('cat');
const h2Element = document.createElement('h2');
h2Element.innerText = 'Hello World';
catElement.appendChild(h2Element);


const dogElement = document.querySelector('.mouse');
const pElement = document.createElement('p');
pElement.innerText = 'Hello World';
dogElement.appendChild(pElement);


const mouseElement = document.getElementsByClassName('mouse');
console.log(mouseElement);
[...mouseElement].forEach((element) => {
    const pElement = document.createElement('p');
    pElement.innerText = 'Hello World';
    element.appendChild(pElement);
});

[...document.querySelectorAll('.mouse')].map((element) => {
    element.setAttribute('style', 'background-color: red; color: white; width: 100px; height: 100px;margin: 10px; padding: 10px;');
})


const allDivs = document.querySelectorAll('div, .mouse, #cat');


const allDivsArray = [...allDivs];

allDivsArray.map((div) => {
    if(div.className === 'mouse') {
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.backgroundColor = 'orange';
        div.style.color = 'white';
        div.style.margin = '10px';
        div.style.padding = '10px';
        div.textContent = 'Cats are cute!';
        div.innerHTML = '<p style="color:brown"> <span style="font-size: 30px">Cats</span> are cute!</h1>';
        //div.setAttribute('style', 'background-color: blue; color: white; width: 100px; height: 100px;margin: 10px; padding: 10px;');
    }
    else {
        div.setAttribute('style', 'background-color: red; color: white; width: 100px; height: 100px;margin: 10px; padding: 10px;');
    }
})

console.log(allDivs);