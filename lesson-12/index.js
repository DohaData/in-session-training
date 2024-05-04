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
        div.innerText = 'Cats are cute!';
        //div.innerHTML = '<p style="color:brown"> <span style="font-size: 30px">Cats</span> are cute!</h1>';
        const pElement = document.createElement('p');
        pElement.style = 'color:brown; font-size: 30px; text-align: center; background-color: black; padding: 10px; margin: 10px;';
        pElement.innerText = 'Cats are CUTE!';
        pElement.className = 'cat-paragraph';
        div.appendChild(pElement);

        //const pElement2 = document.getElementById('cat-paragraph');
        //div.removeChild(pElement2);
        //div.setAttribute('style', 'background-color: blue; color: white; width: 100px; height: 100px;margin: 10px; padding: 10px;');
    }
    else {
        div.setAttribute('style', 'background-color: red; color: white; width: 100px; height: 100px;margin: 10px; padding: 10px;');
    }

})

console.log(allDivs);

function updateHello() {
    const parentElement = document.querySelectorAll('.mouse');
    const parentElementArray = [...parentElement];
    parentElementArray.map((element) => {
        const childElement = element.getElementsByClassName('cat-paragraph');
        element.removeChild([...childElement][0]);
    })
}

function changeImage() {
    const imgElement = document.querySelector('img');
    if (imgElement.getAttribute('src') === './images/1.jpg') {
        imgElement.setAttribute('src', './images/2.jpg');
    }
    else {
        imgElement.setAttribute('src', './images/1.jpg');
    }
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    console.log(event);
}
);

document.getElementById('update-hello').addEventListener('click', event => {
    console.log(event)
    updateHello();
});

document.getElementById('change-cat').addEventListener('click', event => {
    console.log(event)
    changeImage();
});
