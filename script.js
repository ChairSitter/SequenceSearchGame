const numberShadeDivs = () => {
    let arrayOfArrays = [];
    for(let i = 0; i < 10; i++){
        let rowArray = [];
        for(let j = 0; j < 10; j++){
            rowArray.push(document.querySelector(`#box-${i+1}-${j+1}`));
        }
        arrayOfArrays.push(rowArray);
    }

    let total = 0;
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let circle = arrayOfArrays[i][j];
            let randomNumber = Math.floor(Math.random()*10)
            total = total + randomNumber;
            let nineMinus = 9 - randomNumber;
            circle.textContent = randomNumber;
            circle.style.backgroundColor = `rgb(${nineMinus*28}, ${nineMinus*28}, ${nineMinus*28})`; 
            circle.style.fontSize = `${1+(randomNumber * .25)}rem`;
            circle.style.color = "black";
            circle.style.border = "5px solid black";
            if(randomNumber > 4){
                circle.style.color = "white";
            } 
            circle.addEventListener("click", function(){
                if(circle.style.border == "5px solid black"){
                    circle.style.border = "5px solid gold";
                } else if (circle.style.border == "5px solid gold"){
                    circle.style.border = "5px solid black";
                }
            })
        }
    }
}

const playButton = document.querySelector("#play");
playButton.addEventListener("click", numberShadeDivs);



