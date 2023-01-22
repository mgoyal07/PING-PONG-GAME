
var rod1 = document.getElementById("rod1");
var rod2 = document.getElementById("rod2");
var ball = document.getElementById("ball");
var score = document.getElementsByClassName("score");
var rod1Score = document.getElementById("rod1score");
var rod2Score = document.getElementById("rod2score");
var rodspeed = 10;
var ballspeedX = 1;
var ballspeedY = 1;
score[0].style.top = window.innerHeight/2 - rod1Score.getBoundingClientRect().height +"px";
score[1].style.top = window.innerHeight/2 - rod2Score.getBoundingClientRect().height +"px";
// alert("Player has a maximum score of 100");

function reset(){
rod1.style.left = window.innerWidth/2 - rod1.offsetWidth/2;
rod2.style.left = window.innerWidth/2 - rod2.offsetWidth/2;
ball.style.left = (window.innerWidth - ball.offsetWidth)/2;
ball.style.top = (window.innerHeight - ball.offsetHeight)/2;
rod1Score.innerHTML = 0;
rod2Score.innerHTML = 0;
alert("First Rod to reach 5 point wins!!");
}

function storeWin(rod){
    if(rod == "Rod1"){
        rod2Score.innerHTML = parseInt(rod2Score.innerHTML) + 1;
        if(parseInt(rod2Score.innerHTML) == 5){
            alert("Rod 2 has won with a max score of 500")
            reset();
        }
    }
    else if(rod == "Rod2"){
        rod1Score.innerHTML = parseInt(rod1Score.innerHTML) + 1;
        if(parseInt(rod1Score.innerHTML) == 5){
            alert("Rod 1 has won with a max score of 500")
            reset();
        }
    }
}
window.addEventListener("keypress", (e) => {
        let rightdistance = window.innerWidth - rod1.offsetLeft - rod1.offsetWidth;
        switch(e.code){
            case "KeyA":
            if(rod1.offsetLeft < 0){
                break;
            }else{
                rod1.style.left = parseInt(rod1.offsetLeft) - rodspeed + "px";
                rod2.style.left = parseInt(rod2.offsetLeft) - rodspeed + "px";
            }
                break;
            case "KeyD":
                if(rightdistance < 0){
                    break;
                }else{
                    rod1.style.left = parseInt(rod1.offsetLeft) + rodspeed + "px";
                    rod2.style.left = parseInt(rod2.offsetLeft) + rodspeed + "px";
                }
                break;
            }
        if(e.code == "Enter"){
        let ballX = ball.getBoundingClientRect().x;
        let ballY = ball.getBoundingClientRect().y;
        let ballWidth = ball.getBoundingClientRect().width;
        let windowWidth = window.innerWidth;
        let windowHieght = window.innerHeight;
        let rod1Hieght = rod1.offsetHeight;
        let rod2Hieght = rod2.offsetHeight;
        let rod1X = rod1.offsetLeft;
        let rod2X = rod2.offsetLeft;
        let rodWidth = rod1.offsetWidth;

        setInterval(function(){
            ballX += ballspeedX;
            ballY += ballspeedY;
            ball.style.left = ballX + "px";
            ball.style.top = ballY + "px";
            if((ballX + ballWidth) > windowWidth || ballX < 0){
                ballspeedX = -ballspeedX;
            }
            else if(ballY < rod1Hieght){
                ballspeedY = -ballspeedY;
                if((ballX + ballWidth/2) < rod1X || (ballX + ballWidth/2) > (rod1X + rodWidth)){
                    storeWin("Rod1");
                }
            }
            else if((ballY + ballWidth) > (windowHieght - rod2Hieght)){
                ballspeedY = -ballspeedY;
                if((ballX + ballWidth/2) < rod2X || (ballX + ballWidth/2) > (rod2X + rodWidth)){
                    storeWin("Rod2");
                }
            }
        }, 5)
    }
}
)
reset();

