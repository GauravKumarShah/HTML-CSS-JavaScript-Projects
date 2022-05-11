//Game Constants & Variables
let inputDir = {x: 0, y:0};
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 5;
let score =0;
let lastPrintTime = 0;
let snakeArr = [
    {x: 13, y : 15}]
food = {x:10,y:15};

//Game Function
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPrintTime)/1000 < 1/speed){
        return;
    }
    lastPrintTime = ctime;
    gameEngine();
    
}

function isCollide(snake){
    // if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y)  {
            return true;
        }
    }
    // if you bump into wall
        if (snake[0].x >= 19 || snake[0].x <= 0 || snake[0].y >= 19 || snake[0].y <= 0) {
            return true;
        }
    }



function gameEngine(){
    // Part 1 : Updating the snake array
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x:0 ,y:0};
        alert("Game Over, Press any key to play again!");
        snakeArr = [{ x:13, y :14}];
       // musicSound.play();
        score=0;
    }

    // If you hase eaten the food, increment the score and regenrate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x  === food.x){
        foodSound.play();
        score +=1;
        scoreBox.innerHTML = "Score " + score;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "hiScore: "  + hiscoreval;
        }
        
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y});
        let a = 2;
        let b = 16;
        food = {x:2+Math.round(a+(b-a)*Math.random()),y:2+Math.round(a+(b-a)*Math.random())};
    }  
    
    // Moving the snake 
    for (let i = snakeArr.length-2;i >=0;i--){     
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //Part 2 : Display the snake
    board.innerHTML= "";
    snakeArr.forEach((e, index) =>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart= e.x;
        
        if(index === 0){
                snakeElement.classList.add('head');
     } 
     else{
        snakeElement.classList.add('body');
     }
     board.appendChild(snakeElement);
    });

    // Display the food
    snakeFood = document.createElement('div');
    snakeFood.style.gridRowStart = food.y;
    snakeFood.style.gridColumnStart= food.x;
    snakeFood.classList.add('food');
    board.appendChild(snakeFood);
}

//Main logic starts here
let hiscore = localStorage.getItem("hiscoreBox ");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscoreBox",JSON.stringify(hiscoreval));
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore :" + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = { x: 0 , y : 1}  //Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUP");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

         case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
             break;
        default:
            break;
    }
});