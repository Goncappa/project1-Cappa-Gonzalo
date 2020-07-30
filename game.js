/*variables*/

var player;
var ball1 = [];
var ball2 = [];
var defense = [];
var barrier;
var goal;
var shot;
var gameover = false;
var winner = false;

let $start = document.getElementById("start-button");
let $restart = document.querySelector('Restart');

var scores = 0;
var missed = 0;
var ballsAvailables = [];
var chances = 3;
var isGol = false;



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
    win();


    

    /*defenders*/ 

    if (frames % 100 === 0) {
        const obstacle = new Character2(ctx)
        defense.push(obstacle) 
      }
      // if (frames % 100 === 0) {
      //   const obstacle = new Character2(ctx)
      //   defense.push(obstacle) 
      // }
    if (frames % 50 === 0) {
        const obstacle = new Character2(ctx)
        defense.push(obstacle) 
      }
    if (frames % 50 === 0) {
        const obstacle = new Character2(ctx)
        defense.push(obstacle) 
      }
    if (frames % 200 === 0) {
        const obstacle = new Character2(ctx)
        defense.push(obstacle) 
      }
      
    
      
      defense.forEach(element => {
        element.draw();
        element.y += 5; 
      });

    /*balls shoted*/ 
     
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
    
  /*balls*/
     
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
        // console.log('crashed', defense);
        chances -= 1
        player.x = (W/12) * 11;
        player.y = H - 150;
      }
    }

  for (newBall of ball1) {
    if (newBall.hits(player)) {
      // console.log('ball +1', obstacle);
      ballsAvailables.push(shooting);
      ball1.splice(0,1)
      player.dir = 'up';

    }
  }
  for (newBall of ball2) {
    if (newBall.hits(player)) {
      // console.log('ball2 +1', obstacle);
      ballsAvailables.push(shooting);
      ball2.pop()
      player.dir = 'up';

 
    }
  }


  for (shooting of ballsAvailables) {
    if (shooting.hitsGoal(goal)) {
      // console.log('goooooal', goal);
      scores +=1;
      console.log(scores);
      ballsAvailables.pop();
      isGol=true;
    }
  }

  // if (isGol === true) {
  //   setInterval(goool.draw());
  //   isGol = false;
  // }

  for (shooting of ballsAvailables) {
    if (shooting.y === 5) {
      // console.log('missed');
      missed +=1;
    }
  }

    /* Game Over */

  if (chances === 0) {
    gameover = true;

  }
  if (missed === 8) {
    gameover = true;
  }

  if (scores === 25) {
    winner = true;
  }
   /* levels */

   if (scores >= 5) {
     goal.w = 180
     if (frames % 50 === 0) {
      const obstacle = new Character2(ctx)
      defense.push(obstacle) 
    }
   } 
   
   if (scores >= 10) {
    goal.w = 135
    if (frames % 150 === 0) {
      const obstacle = new Character2(ctx)
      defense.push(obstacle) 
    }
  } 
  
  if (scores >= 15) {
    goal.w = 90
    if (frames % 50 === 0) {
      const obstacle = new Character2(ctx)
      defense.push(obstacle) 
    }
  } 
  
  if (scores >= 20) {
    goal.w = 45
    if (frames % 200 === 0) {
      const obstacle = new Character2(ctx)
      defense.push(obstacle) 
    }
  }
}

  /* --------------------------------------------------------------- */
 

var raf;
var frames = 0;
function animLoop() {
    frames++;
    draw();
    if (!gameover){
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
            case 37: player.moveLeft();  /*console.log('left',  player)*/; break;
            case 39: player.moveRight(); /*console.log('right', player)*/; break;
            case 40: player.moveDown(); /*console.log('back', player)*/; break;
            case 38: player.moveUp(); /*console.log('up', player)*/; break;
            // case 13: restart(); console.log("Game restarted"); break;

        }
    }


  function startGame() {
    if (raf) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(raf);
      console.log('frame started')
    } 
    shooting = new ShootingBall();
    player = new Character(ctx);
    goal = new Goal();
    gameoverlogo = new GameoverLogo();
    goool = new Gol();
    winnerLogo = new WinnerLogo();
    animLoop();
    draw();
    scores = 0; 
    missed = 0;
    chances = 3;
  }

  
$start.onclick = function() {
    if (!gameover){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startGame();
    $start.innerHTML = 'RESTART';
    gameover = false;
    winner = false;
    } if (gameover === true) {
      gameover = false;
      startGame();
    }
  };


function printScore() {
  let $score = document.getElementById('score');
  $score.innerHTML= `${"SCORE"}:${scores}`;
  if (scores >= 24) {
    $score.style.color = 'green';
  } if (scores === 0) {
    $score.style.color = "#57C4DE";
  }
}


function printLives() {
  let $chances = document.getElementById('chances');
  $chances.innerHTML= `${"CHANCES"}:${chances}`;
  if (chances <= 1) {
    $chances.style.color = 'red';
  } if (chances > 1) {
    $chances.style.color = '#57C4DE';
  }
}

function printMissedBalls() {
  let $miss = document.getElementById('miss');
  $miss.innerHTML= `${"MISSED"}:${missed}`;
  if (missed >= 7) {
    $miss.style.color = 'red';
  } if (missed === 0) {
    $miss.style.color = "#57C4DE";
  }
}

function gameOver() {
  if(gameover){
  ctx.restore();
  gameoverlogo.draw();
  gameover = false;
  ball1.length = 0;
  ball2.length = 0;
  ballsAvailables.length = 0;
  defense.length = 0;
  $start.innerHTML = 'RESTART';
  console.log("LOOSER");
  } 
}

function win () {
  if(winner === true) {
    ctx.restore();
    const imgWin = new Image();
    ball1.length = 0;
    ball2.length = 0;
    ballsAvailables.length = 0;
    defense.length = 0;
    imgWin.src = "https://thumbs.dreamstime.com/z/winner-award-badge-isolated-white-background-winner-badge-100765562.jpg"; 
    ctx.drawImage(imgWin, 0, 0, W, H);
  }
}



