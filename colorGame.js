var colors =  generateRandomColors(numSquares);
var numSquares = 6

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;

var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
       
         squares[i].style.background = colors[i];
       
        squares[i].style.display = "block";
       
    }
})

resetButton.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor =  pickColor();
    //change colorDisplay to match picked content
    colorDisplay.textContent = pickedColor;
    //change color of squares
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";

})

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
            h1.style.background = pickedColor;
            resetButton.textContent = "Play Again?";
		} else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";

}
