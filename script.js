let rotateLeftButton = document.getElementById('rotateLeftButton');
let rotateRightButton = document.getElementById('rotateRightButton');
let rotateDegreesButton = document.getElementById('rotateDegreesButton');


function rotateEva(angle) {
    const eva = document.getElementById('eva');
    eva.style.transform = 'rotate('+ angle +'deg)';     //style refers to css
}

rotateLeftButton.addEventListener("click", onLeftButtonClick);

function onLeftButtonClick() {
    rotateEva(-90);
}

rotateRightButton.addEventListener("click", onRightButtonClick);

function onRightButtonClick() {
    rotateEva(90);
}

rotateDegreesButton.addEventListener("click", onDegreesButtonClick);

function onDegreesButtonClick() {
    let angleInput = document.getElementById('angle');
    let angle = angleInput.value;
    rotateEva(angle);
};


let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('favoriteThings').children; // returns an array of <li> elements


