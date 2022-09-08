let boxOne = document.querySelector("#boxOne");
let boxTwo = document.querySelector("#boxTwo");
let boxThree = document.querySelector("#boxThree");
let boxFour = document.querySelector("#boxFour");
let boxFive = document.querySelector("#boxFive");
let boxSix = document.querySelector("#boxSix");

// This function generates random numbers from min to max.
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function generates random rgb colors.
const colorGenetator = () => {
    let r = getRndInteger(0, 255);
    let g = getRndInteger(0, 255);
    let b = getRndInteger(0, 255);

    return `rgb(${r}, ${g}, ${b})`;
}

let boxOneValue = colorGenetator();
let boxTwoValue = colorGenetator();
let boxThreeValue = colorGenetator();
let boxFourValue = colorGenetator();
let boxFiveValue = colorGenetator();
let boxSixValue = colorGenetator();

// This assigns random colors to be displayed in each box.
boxOne.style.backgroundColor = boxOneValue;
boxTwo.style.backgroundColor = boxTwoValue;
boxThree.style.backgroundColor = boxThreeValue;
boxFour.style.backgroundColor = boxFourValue;
boxFive.style.backgroundColor = boxFiveValue;
boxSix.style.backgroundColor = boxSixValue;