let mode = document.querySelector(".darkMode");
let result = document.querySelector("h1");
let text = document.querySelector("span");
let reset = document.querySelector("button");
let boxOne = document.querySelector("#boxOne");
let boxTwo = document.querySelector("#boxTwo");
let boxThree = document.querySelector("#boxThree");
let boxFour = document.querySelector("#boxFour");
let boxFive = document.querySelector("#boxFive");
let boxSix = document.querySelector("#boxSix");
let modeButton = document.querySelector("input");


// This function changes the mode of the application between dark and light.
const modeChange = () => {
    if (mode.className === "darkMode") {
        mode.className = "lightMode";
        modeButton.value = "Dark";
    }
    else {
        mode.className = "darkMode";
        modeButton.value = "Light";
    }
}

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

// This function generates result 
const resultGenerator = () => {
    const boxArray = [boxOneValue, boxTwoValue, boxThreeValue, boxFourValue, boxFiveValue, boxSixValue];

    return boxArray[getRndInteger(0, 5)];
}

// This function checks if the option the user selects is the right option.
const resultVerifier = (value, element) => {
    if (value === result.innerHTML) {
        // These statements give all boxes the same color and make them visible.
        boxOne.style.backgroundColor = value;
        boxTwo.style.backgroundColor = value;
        boxThree.style.backgroundColor = value;
        boxFour.style.backgroundColor = value;
        boxFive.style.backgroundColor = value;
        boxSix.style.backgroundColor = value;

        boxOne.style.visibility = "visible";
        boxTwo.style.visibility = "visible";
        boxThree.style.visibility = "visible";
        boxFour.style.visibility = "visible";
        boxFive.style.visibility = "visible";
        boxSix.style.visibility = "visible";

        text.innerHTML = "Correct!";
        text.style.color = "rgb(0, 255, 0)";
    }
    else {
        element.style.visibility = "hidden";
        text.innerHTML = "Incorrect!";
        text.style.color = "rgb(255, 0, 0)";
    }
}

// These statements assign valid rgb values.
let boxOneValue = colorGenetator();
let boxTwoValue = colorGenetator();
let boxThreeValue = colorGenetator();
let boxFourValue = colorGenetator();
let boxFiveValue = colorGenetator();
let boxSixValue = colorGenetator();

// These statements assigns random colors to be displayed in each box.
boxOne.style.backgroundColor = boxOneValue;
boxTwo.style.backgroundColor = boxTwoValue;
boxThree.style.backgroundColor = boxThreeValue;
boxFour.style.backgroundColor = boxFourValue;
boxFive.style.backgroundColor = boxFiveValue;
boxSix.style.backgroundColor = boxSixValue;

// This statement displays the result generated to the user.
result.innerHTML = resultGenerator();

/*        THIS SECTION HANDLES EVENTS        */

reset.addEventListener('click', e => {location.reload();})
boxOne.addEventListener('click', e => {resultVerifier(boxOneValue, boxOne);})
boxTwo.addEventListener('click', e => {resultVerifier(boxTwoValue, boxTwo);})
boxThree.addEventListener('click', e => {resultVerifier(boxThreeValue, boxThree);})
boxFour.addEventListener('click', e => {resultVerifier(boxFourValue, boxFour);})
boxFive.addEventListener('click', e => {resultVerifier(boxFiveValue, boxFive);})
boxSix.addEventListener('click', e => {resultVerifier(boxSixValue, boxSix);})
modeButton.addEventListener('click', e => {modeChange();})






/*console.log(`box1: ${boxOneValue}`);
console.log(`box2: ${boxTwoValue}`);
console.log(`box3: ${boxThreeValue}`);
console.log(`box4: ${boxFourValue}`);
console.log(`box5: ${boxFiveValue}`);
console.log(`box6: ${boxSixValue}`);*/