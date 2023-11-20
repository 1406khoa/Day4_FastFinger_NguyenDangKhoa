let keyword = document.getElementById('word');
let score = document.getElementById('score')
let timer = document.getElementById('timer')
let input = document.getElementById('input')
let start_btn = document.getElementById('btn')



let getScore = 0;
let time = 10;
let clear;

function handleTimer() {
    clear = setInterval(Timer, 1000)
}

randomWord = ['ability', 'across', 'assume', 'how', 'much', 'is', 'your', 'what', 'where', 'some'];
let random = randomWord[Math.floor(Math.random() * randomWord.length)];






function start() {
    handleTimer();
    start_btn.disabled = true;
    input.disabled = false;
    time = 10;
}
start_btn.addEventListener("click", start)




function Timer() {
    if (time <= 0) {
        clearInterval(clear);
        timer.innerText = 'Game Over';
        input.disabled = true;
        start_btn.disabled = false;
        
        start_btn.innerText = "Play again"
    }
    else {
        timer.innerHTML = "Time: " + time
        time--;
    }
}

