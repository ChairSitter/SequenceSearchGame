const body = document.body;
const headline = document.querySelector('h1');
const rules = document.querySelector("#rules");

const numberShadeDivs = () => {
    console.log("ran")
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let circle = document.querySelector(`#box-${i+1}-${j+1}`);
            let randomNumber = Math.floor(Math.random()*10);
            let circleColor = `rgb(${(9 - randomNumber)*28}, ${(9 - randomNumber)*28}, ${(9 - randomNumber)*28})`;
            circle.textContent = randomNumber;
            circle.style.backgroundColor = circleColor; 
            circle.style.fontSize = `${1 + (randomNumber * .25)}rem`;
            circle.style.color = "black";
            circle.style.border = `5px solid ${circleColor}`;
            if(randomNumber > 4){
                circle.style.color = "white";
            }
            let isFirst = false;
            circle.addEventListener("click", function(){
                if (isFirst){
                    circle.style.border = `5px solid ${circleColor}`;
                } else {
                    circle.style.border = `5px solid red`;
                }
                isFirst = !isFirst;
            })
        }
    }
}
let isLight = false;
const lightMode = () => {
    if(isLight === false){
        body.style.backgroundColor = "white";
        headline.style.color = "black";
        rules.style.color = "black";
        lightModeButton.innerHTML = "DARK<br/>MODE";
    } else {
        body.style.backgroundColor = "black";
        headline.style.color = "white";
        rules.style.color = "white";
        lightModeButton.innerHTML = "LIGHT<br/>MODE";
    }
    isLight = !isLight;
}

const playButton = document.querySelector("#play");
playButton.addEventListener("click", numberShadeDivs);

const lightModeButton = document.querySelector("#light-mode");
lightModeButton.addEventListener("click", lightMode);



