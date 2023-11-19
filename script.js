let score = 0;
let timer = 10;

function stargame(){
    score =0;
    timer =10;
    display_random();
    updatescore();
    updateTimer();
}
//Hide doan tren de chay khong time

function compareChar()/*so sanh 2 ky tu cho san va nhap vao dung score tang*/{
    const givenChar = document.getElementById('word').innerText;
    const input = document.getElementById('input').value;
    if (givenChar === input){
        score++;
    }else 
        document.write('You Lose');
    updatescore();
    display_random()

}

function display_random()/*cai nay dung de random ky tu*/{
    const character = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const randomLocal = Math.floor(Math.random() * character.length);
    const randomchar = character[randomLocal];
    document.getElementById('word').innerText = randomchar;
    document.getElementById('input').value ='';
}

function updatescore(){
    document.getElementById('score').innerText = 'Score: ' + score;
}
function updateTimer(){
    if (timer>0){
        timer--;
    }
    document.getElementById('time').innerText= 'Time: ' +timer;
}

display_random();//Dung` khi khong time co time thi hide
updatescore();//Dung khi khong time co time thi hide