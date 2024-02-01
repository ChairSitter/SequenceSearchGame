let initial = true;
const numberShadeDivs = () => {
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let circle = document.querySelector(`#box-${i+1}-${j+1}`);
            let randomNumber = Math.floor(Math.random()*10);
            circle.textContent = randomNumber;
            circle.style.backgroundColor = `rgb(${(9 - randomNumber)*28}, ${(9 - randomNumber)*28}, ${(9 - randomNumber)*28})`; 
            circle.style.fontSize = `${1+(randomNumber * .25)}rem`;
            circle.style.color = "black";
            circle.style.border = "5px solid black";
            if(randomNumber > 4){
                circle.style.color = "white";
            }
            if(initial === true){
                circle.addEventListener("click", function(){
                if(circle.style.border == "5px solid black"){
                    circle.style.border = "5px solid red";
                } else if (circle.style.border == "5px solid red"){
                    circle.style.border = "5px solid black";
                }
                initial = false;
            })
            }
        }
    }
}

const playButton = document.querySelector("#play");
playButton.addEventListener("click", numberShadeDivs);



