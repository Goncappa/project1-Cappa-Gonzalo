/*variables*/

var player;
var ball1 = [];
var ball2 = [];
var defense = [];
var cone = [];
var barrier;
var goal;
var shoot;
var gameover = false;

let $start = document.getElementById("start-button");
let $restart = document.getElementById('restart');

var time = 0;
var scores = 0;
var missed = 0;
var ballsAvailables = [];
var chances = 3;


const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

/*functions*/ 

gameOver();


function draw() {  

    const imgField = new Image();
    imgField.src = "./images/test1.png"; 
    ctx.drawImage(imgField, 0, 0, W, H);


    player.draw();
    goal.draw();
    printScore();
    printLives();
    drawGoal();
    printMissedBalls() 



    

    /*defenders*/ 

    if (frames % 100 === 0) {
        const obstacle = new Defense()
        defense.push(obstacle) 
      }
    if (frames % 50 === 0) {
        const obstacle = new Defense()
        defense.push(obstacle) 
      }
    if (frames % 50 === 0) {
        const obstacle = new Defense()
        defense.push(obstacle) 
      }
    if (frames % 200 === 0) {
        const obstacle = new Defense()
        defense.push(obstacle) 
      }
    
      
      defense.forEach(element => {
        element.draw();
        element.y += 5; 
      });

    /*balls shooted*/ 
     
      ballsAvailables.forEach(element => 
      {element.draw();
          element.y -= 5;
      });



    /*goal*/

      function drawGoal (){
        goal.draw()

        if (goal.dir === 1 && goal.x > W - goal.w) {
          goal.dir = -1;
        }
        if (goal.dir === -1 && goal.x < 0) {
          goal.dir = 1;
        }

        goal.x += goal.dir;
        

      }
    
  
    /*cones*/
     
    // function addCone(){
    //   while (cone.length < 8){
    //   let obstacle = new Cone();
    //   cone.push(obstacle)
    //   }
    // }
    // addCone()

    cone.forEach(element => {
        element.draw();
      });

        /*cones*/
     
    function addBall1(){
      while (ball1.length < 1){
      let newBall = new Ball();
      ball1.push(newBall)
      }
    }

    function addBall2(){
      while (ball2.length < 1){
      let newBall = new Ball();
      ball2.push(newBall)
      }
    }
    addBall1()
    addBall2()

    ball1.forEach(element => {
        element.draw();
      });
    
      ball2.forEach(element => {
      element.draw();
      });


    /* Collisions */

    for (obstacle of defense) {
        if (obstacle.hits(player)) {
          console.log('crashed', defense);
          chances -= 1
          player.x = (W/12) * 11;
          player.y = H - 150;
        }
      }


  // for (obstacle of cone) {
  //   if (obstacle.hits(player)) {
  //     console.log('crashed', obstacle);
  //     gameover = true;
  //   }
  // }
    
  // for (obstacle of cone) {
  //   if (obstacle.hits(player)) {
  //     console.log('crashed', obstacle);
  //     gameover = true;
  //   }
  // }

  for (newBall of ball1) {
    if (newBall.hits(player)) {
      console.log('ball +1', obstacle);
      ballsAvailables.push(shooting);
      ball1.splice(0,1)
    }
  }
  for (newBall of ball2) {
    if (newBall.hits(player)) {
      console.log('ball2 +1', obstacle);
      ballsAvailables.push(shooting);
      ball2.pop()
 
    }
  }

  for (newBall of ball2) {
    if (newBall.hits(player)) {
      console.log('ball2 +1', obstacle);
      ballsAvailables.push(shooting);
      ball2.pop()
    }
  }

  for (shooting of ballsAvailables) {
    if (shooting.hitsGoal(goal)) {
      console.log('goooooal', goal);
      ballsAvailables.pop();
      scores +=1;
      console.log(scores);
    }
  }

  for (shooting of ballsAvailables) {
    if (shooting.y == 5) {
      console.log('missed');
      missed +=1;
    }
  }

    /* Game Over */

  if (chances === 0) {
    gameover = true;
  }
  if (missed === 10) {
    gameover = true;
  }
   /* levels */

   if (scores === 5) {
     goal.w = 180
   } if (scores === 10) {
    goal.w = 135
  } if (scores === 15) {
    goal.w = 90
  } if (scores === 25) {
    goal.w = 45
  }



   

}

  /* --------------------------------------------------------------- */
 

  var raf;
  var frames = 0;
function animLoop() {
    frames++;
    draw();
    if (!gameover) {
      raf = requestAnimationFrame(animLoop);
    } if (gameover) {
      draw();
      gameOver();

    }

  }
  
  document.onkeydown = function (e) {
    if (!player) return; 
    shooting = new ShootingBall();
        switch (e.keyCode) {
            // case 32: shoot(); ballsAvailables.pop(); console.log('space'); break;
            case 37: player.moveLeft();  console.log('left',  player); break;
            case 39: player.moveRight(); console.log('right', player); break;
            case 40: player.moveBack(); console.log('back', player); break;
            case 38: player.moveForward(); console.log('up', player); break;
            // case 13: restart(); console.log("Game restarted"); break;

        }
    }


  function startGame() {
    if (raf) {
      cancelAnimationFrame(raf);
      console.log('frame started')
    }
    player = new Player();
    goal = new Goal();
    shooting = new ShootingBall();
    gameoverlogo = new GameoverLogo();
    animLoop();
    draw();



  }

//   function restart() {
//     return startGame();
//   }
  


$start.onclick = function() {
    startGame();
    // $start.innerHTML = 'STOP';
  };

  $restart.onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    chances += 3;
    scores *= 0;
    ctx.clear();
    console.log("restart clicked")
    restart();
    // scores = 0;
    // chances = 3;
    // ctx.restore();
    // animLoop();
    // startGame();
  
  };

  
  startGame();
  
//   if (gameover === true) {
//     alert("game over")
//     ctx.fillText("Game Over", W/2, H/2, 150)
//     startGame();
//     console.log("looser")
// }


function printScore() {
  let $score = document.getElementById('score');
  $score.innerHTML= `${"Score"}:${scores}`;
}

function printLives() {
  let $chances = document.getElementById('chances');
  $chances.innerHTML= `${"Chances"}:${chances}`;
}

function printMissedBalls() {
  let $chances = document.getElementById('miss');
  $chances.innerHTML= `${"Missed"}:${missed}`;
}

function gameOver() {
  if(gameover){
  ctx.restore();
  console.log("LOOSER");
  gameoverlogo.draw();
  $start.className = 'restart';
  $start.innerHTML = 'Restart';
  // $start.style.backgroundColor = 'lightblue'; // to change
  } 
}


function restart() {
    player = new Player();
    goal = new Goal();
    shooting = new ShootingBall();
    gameoverlogo = new GameoverLogo();
    animLoop();
    draw();
  }


