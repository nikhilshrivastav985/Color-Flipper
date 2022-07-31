const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexValue = document.querySelector('.hex-value');
const button = document.querySelector('button');
const headingText = document.querySelector('.heading');

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

function hexValuePicker(){
    let hexColor = '#';
    for( i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    hexValue.style.color = hexColor;
    hexValue.textContent = hexColor;
    document.body.style.background = hexColor;
    headingText.style.color = hexColor;
}


button.addEventListener('click', () => {
    getRandomNumber();
    hexValuePicker();
})


