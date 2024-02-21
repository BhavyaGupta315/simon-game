let started = false;
let userSeq = [];
let gameSeq = [];
let classes = ["yellow", "red", "cyan", "purple"];
let level = 0;
let highScore = 0;
let h4 = document.querySelector("h4");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function randomButton() {
    return Math.floor(Math.random() * 3);
}

function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `Level: ${level}`;
    let randomColor = classes[randomButton()];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

let allBtn = document.querySelectorAll(".btn");
allBtn.forEach(btn => {
    btn.addEventListener("click", btnClick);
});

function btnClick() {
    // console.log(colorOfUser);
    userFlash(this);
    if(started == true){
        let colorOfUser = this.getAttribute("id");
        userSeq.push(colorOfUser);
    checkAns(userSeq.length - 1);
    }
    
}

function userFlash(btn) {
    btn.classList.add("greenflash");
    setTimeout(function () {
        btn.classList.remove("greenflash");
    }, 150);
}

function checkAns(idx){
    console.log(userSeq);
    console.log(gameSeq);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        if(highScore < level){
            highScore = level;
        }
        h4.innerHTML = `Game Over! <b>Your Score was ${level} </b><br> Highest Score Until Now is ${highScore} <br> Press Any Key to Start`;
        let harna = document.querySelector("body");
        harna.style.backgroundColor = "red";
        setTimeout(function(){
            harna.style.backgroundColor = "white";
        }, 250);
        resetGame();
    }
}

function resetGame(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
