let result = document.querySelector("h1");
let text = document.querySelector("span");
let reset = document.querySelector("button");
let boxContainer = document.querySelector("#boxContainer");
let boxOne = document.querySelector("#boxOne");
let boxTwo = document.querySelector("#boxTwo");
let boxThree = document.querySelector("#boxThree");
let boxFour = document.querySelector("#boxFour");
let boxFive = document.querySelector("#boxFive");
let boxSix = document.querySelector("#boxSix");
let mode = document.querySelector(".darkMode");
let modeButton = document.querySelector("i");

const boxValueArray = new Array(6);
const boxElementArray = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix];

// This function changes the mode of the application between dark and light.
const modeChange = () => {
    if (mode.className === "darkMode") {
        mode.className = "lightMode";
        modeButton.style.color = "rgb(0, 0, 0)";
        // This if statement fixed the "Guess the color" bug
        if (text.innerHTML == "Guess the color") {
            text.style.color = "rgb(0, 0, 0)";
        }
    }
    else {
        mode.className = "darkMode";
        modeButton.style.color = "rgb(255, 255, 255)";
        if (text.innerHTML == "Guess the color") {
            text.style.color = "rgb(255, 255, 255)";
        }
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
const resultGenerator = () => boxValueArray[getRndInteger(0, 5)];

// This function checks if the option the user selects is the right option.
const resultVerifier = (value, element) => {
    if (value === result.innerHTML) {
        /* This block gives all boxes the same color-value, color and make them visible. */
        for (let i = 0; i < boxValueArray.length; i++) {
            boxValueArray[i] = value;
            boxElementArray[i].style.backgroundColor = value;
            boxElementArray[i].style.visibility = "visible";
        }

        text.innerHTML = "Correct!";
        text.style.color = "rgb(0, 255, 0)";
        
        // Add a delay of 1.3 seconds before resetting the game automatically
        setTimeout(() => {
          gameGenerator();
        }, 1300);
    }
    else {
        element.style.visibility = "hidden";
        text.innerHTML = "Incorrect!";
        text.style.color = "rgb(255, 0, 0)";
    }
}

// This function generates the game.
const gameGenerator = () => {
    // This block assigns random colors to be displayed in each box.
    for(let i = 0; i < boxValueArray.length; i++) {
        boxValueArray[i] = colorGenetator();
        boxElementArray[i].style.backgroundColor = boxValueArray[i];
        boxElementArray[i].style.visibility = "visible";
    }

    // This statement displays the result generated to the user.
    result.innerHTML = resultGenerator();

    text.innerHTML = "Guess the color";
    if (mode.className === "darkMode") {
        text.style.color = "rgb(255, 255, 255)";
    }
    else {
        text.style.color = "rgb(0, 0, 0)";
    }
}

gameGenerator(); // Loads the game when application is refreshed.

/*        THIS SECTION HANDLES EVENTS        */

reset.addEventListener('click', () => gameGenerator())
boxOne.addEventListener('click', () => resultVerifier(boxValueArray[0], boxOne))
boxTwo.addEventListener('click', () => resultVerifier(boxValueArray[1], boxTwo))
boxThree.addEventListener('click', () => resultVerifier(boxValueArray[2], boxThree))
boxFour.addEventListener('click', () => resultVerifier(boxValueArray[3], boxFour))
boxFive.addEventListener('click', () => resultVerifier(boxValueArray[4], boxFive))
boxSix.addEventListener('click', () => resultVerifier(boxValueArray[5], boxSix))
modeButton.addEventListener('click', () => modeChange())