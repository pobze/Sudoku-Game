var numberSelected = null;
var  tileSelected = null;
var errors = 0;

var board = [
    "--65----8",
    "-95----2-",
    "7--9--3--",
    "----4-27-",
    "---873---",
    "-79-5----",
    "--2--8--9",
    "-5----81-",
    "3----54--"
]

var solution = [
    "136524798",
    "895367124",
    "724981356",
    "583649371",
    "261873945",
    "479152683",
    "642718539",
    "957436812",
    "318295467"
]

window.onload = function(){
    setGame();
}

function setGame(){
    for(let i = 1; i <= 9; i++){
        //<div id="i" class="number">1</div>
        let number = document.createElement("div");
        //adding an id to each div.
        number.id = i;
        //adding a text in the div with the value of i.
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        //adding a number class to each div.
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    //Board
    for(let j = 0; j < 9; j++){
        for(let k = 0; k < 9; k++){
            let tile = document.createElement("div");
            tile.id = j.toString() + "-" + k.toString();
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if(numberSelected != null){
        //removing the class form the unselcted div
        numberSelected.classList.remove("number-selected");
    }
    //this refers to the div itself.
    numberSelected = this;
    numberSelected.classList.add("number-selected");
}