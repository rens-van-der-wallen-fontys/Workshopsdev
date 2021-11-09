document.addEventListener('keydown', MoveImg);
var Wormpie = document.getElementById("Worm");
var birdie = document.getElementById("bird");
var Score = document.getElementById("ScoreCard");

var soundPlay = document.getElementById("myAudio");

    // Set up variables to be used later
    var ScoreCounter = 0;

    // Vogel positie
    let ImgPosX = birdie.style.left;
    let ImgPosY = birdie.style.top;

    // Worm positie
    let WormPosX = Wormpie.style.left;
    let WormPosY = Wormpie.style.top;

    // Aantal pixels per move
    const ChangePerTick = 8;

function MoveImg(logKeyItem) {
    ImgPosX = birdie.style.left;
    ImgPosY = birdie.style.top;

    switch(logKeyItem.keyCode) {
        case 65:
            MoveLeft();
          break;
        case 87:
            MoveUp();
          break;
        case 83:
            MoveDown();   
          break;
        case 68:
            MoveRight();
          break;
        default:
          return;
      }
}

function MoveLeft() {
    birdie.classList.remove("Turn");
    if(birdie.style.left >= "-15px") {
        return;
    }
    else {
        num = parseInt(birdie.style.left, 10) || 0;
        num -= ChangePerTick;
        birdie.style.left = num + "px";

        CheckCollision()
    }
}

function MoveRight() {
    birdie.classList.add("Turn");
    if(birdie.style.left >= "1800px") {
        return;
    }
    else {
        num = parseInt(birdie.style.left, 10) || 0;
        num += ChangePerTick;
        birdie.style.left = num + "px";  
        
        CheckCollision()
    }
}

function MoveUp() {
    if(birdie.style.top >= "-15px") {
        return;
    }
    else {
        num = parseInt(birdie.style.top, 10) || 0;
        num -= ChangePerTick;
        birdie.style.top = num + "px";  

        CheckCollision()
    }
}

function MoveDown() {    
    if(birdie.style.top >= "850px") {
        return;
    }
    else {
        num = parseInt(birdie.style.top, 10) || 0;
        num += ChangePerTick;
        birdie.style.top = num + "px";   

        CheckCollision()
    }
}

function CheckCollision() {
    if(rectIntersect(birdie.x, birdie.y, birdie.width, birdie.height, Wormpie.x, Wormpie.y, Wormpie.width, Wormpie.height))
    {
        if (true) {
            soundPlay.Play();
            ScoreCounter = ScoreCounter + 1;
            Score.innerHTML = "Score : " + ScoreCounter;
            ResetWorm();
        }
        else {
            return;
        }
    }
    else {
       return;
    }
}

function ResetWorm() {
    var WormX = Math.floor(Math.random() * 1750);
    var WormY = Math.floor(Math.random() * 800);

    Wormpie.style.left = WormX + "px";
    Wormpie.style.top = WormY + "px"; 

    return;
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    // Check x and y for overlap
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}