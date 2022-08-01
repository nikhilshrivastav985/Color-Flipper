// array of hex color code format
const hexCharacters = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexValue = document.querySelector('.hex-value'); // generated color code
const button = document.querySelector('button'); //color changer button
const headingText = document.querySelector('.heading'); 

// generating random no. from 0 to 'hex length'
function getRandomNumber(){
    return Math.floor(Math.random() * hexCharacters.length);
}

function hexValuePicker(){
    let hexColor = '#';
//     loop for adding six random characters from hex(array) to the hexColor variable
    for( i = 0; i < 6; i++){
        hexColor += hexCharacters[getRandomNumber()]
    }
    hexValue.style.color = hexColor; // changing Color of generated color code 
    hexValue.textContent = hexColor; // new color code
    document.body.style.background = hexColor; // changing page's background color to the color generated
    headingText.style.color = hexColor; // changing navbar heading color
}

// button which changes color by above 2 functions
button.addEventListener('click', () => {
    getRandomNumber();
    hexValuePicker();
})


