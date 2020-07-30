

let ShootingBall = class {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = (img.naturalWidth/10)/(img.naturalHeight/10);

      this.x = player.x;
      this.y = player.y;
      this.w = 35;
      this.h = this.w/imgRatio;
    }
    img.src = "images/ball.png";
  }

  draw() {
    if (!this.img) return; 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  hitsGoal(goal) {
    return (
      (goal.x+goal.w >= this.x && goal.x <= this.x+this.w) 
      &&
      (goal.y <= this.y+this.h && goal.y+goal.h >= this.y)
    );
  }

}



  /*Goal*/

  let Goal = class {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
        const imgRatio = img.naturalWidth/img.naturalHeight;
  
        this.x = W/2 - (W/12);
        this.y = 50;
        this.w = 225;
        this.h = 40;
        this.dir = 1;
      }
      img.src = "images/goal.png";
      
    }
  
    draw() {
        if (!this.img) return; 
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      }

      hits(Ball) {
        return (
          (Ball.x+Ball.w >= this.x && Ball.x <= this.x+this.w) 
          &&
          (Ball.y <= this.y+this.h && Ball.y+Ball.h >= this.y)
        );
    }

    move() {
      if (this.x === 0){
      this.x += 5;
      }
      if (this.x = 760 && this.x > 0){
        this.x -= 5;
        }
    }
  }
  /*cone*/

  let Cone = class {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
        const imgRatio = img.naturalWidth/img.naturalHeight;
  
        this.x = ((W /6) * (Math.floor(Math.random()* 5) + 1)) 
        this.y = H / 2;
        // this.y = ((H/20) * (Math.floor(Math.random()* 6) + 6)) ;
        this.w = 48;
        this.h = 30;
      }
      img.src = "images/cone.png";
    }
  
    draw() {
        if (!this.img) return; 
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      }

      hits(Ball) {
        return (
          (player.x+player.w >= this.x && player.x <= this.x+this.w) 
          &&
          (player.y <= this.y+this.h && player.y+player.h >= this.y)
        );
    }
  }

  /*ball*/

  let Ball = class {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
        const imgRatio = (img.naturalWidth/10)/(img.naturalHeight/10);
  
        this.x = ((W /12) * (Math.floor(Math.random()* 10) + 1))  
        this.y = ((H /18) * (Math.floor(Math.random()* 5) + 8)) ;
        this.w = 35;
        this.h = this.w/imgRatio;
      }
      img.src = "images/ball.png";
    }

      draw() {
    if (!this.img) return; 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  hits(player) {
    return (
      (player.x+player.w >= this.x && player.x <= this.x+this.w) 
      &&
      (player.y <= this.y+this.h && player.y+player.h >= this.y)
    );
}
}

/*Game Over */

let GameoverLogo = class {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 300;
      this.h = 300;
      this.x = (W - this.w) / 2
      this.y = (H/2) - this.h / 2;

    }
    img.src = "images/GameOver.png";
  }

  

  draw() {
      if (!this.img) return; 
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

  }

  /*WIN */

let WinnerLogo = class {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 200;
      this.h = 400;
      this.x = (W - this.w) / 2
      this.y = (H/2) - this.h / 2;

    }
    img.src = "images/cup.png";
  }

  

  draw() {
      if (!this.img) return; 
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

  }

  /*Gol*/

  let Gol= class {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
        const imgRatio = img.naturalWidth/img.naturalHeight;
  
        this.w = 300;
        this.h = 300;
        this.x = (W - this.w) / 2
        this.y = (H/2) - this.h / 2;
  
      }
      img.src = "images/logo2.png";
    }
  
    
  
    draw() {
        if (!this.img) return; 
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      
      }
  
    }


