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

const playButton = document.querySelector("#play");
playButton.addEventListener("click", numberShadeDivs);



