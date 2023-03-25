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

let changeColor = document.getElementById('changeColorButton');

function changeBackgroundColor() { 
    let favorites = document.getElementById('favorites');
    let colorInput = document.getElementById('colorToChange');
    let color = colorInput.value;
    favorites.style.backgroundColor = color;
       
}

changeColor.addEventListener("click", changeBackgroundColor);

