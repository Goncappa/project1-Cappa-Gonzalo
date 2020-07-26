  /*player*/

let Player = class {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
        const imgRatio = img.naturalWidth/img.naturalHeight;
  
        this.x = (W/12) * 11;
        this.y = H - 150;
        this.w = 48;
        this.h = this.w/imgRatio;
        this.border = 'black';
      }
      img.src = "images/player.png";
    }

    draw() {
        if (!this.img) return; 
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      }
    
      moveLeft() {
        if(this.x >= (W/11)){
          this.x -= (W/12);
        }
      }
      moveRight() {
        if (this.x <= W - (W/6) - (W/12)){
        this.x += (W/12);
        }
      }

      moveBack() {
        if (this.y <= H - 40){
        this.y += 30;
        }
      }

      moveUp() {
        if (this.y >= 70) {
        this.y -= 30;
        }
      }
    }

let ShootingBall = class {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = (img.naturalWidth/10)/(img.naturalHeight/10);

      this.x = player.x;
      this.y = player.y;
      this.w = 20;
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

let Defense = class {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.x = ((W /12) * (Math.floor(Math.random()* 10) + 1)) //- (W/12);
      this.y = 0;
      this.w = 48;
      this.h = 30;
    }
    img.src = "images/Defense.png";
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

  /*Goal*/

  let Goal = class {
    constructor() {
      const img = document.createElement('img');
      img.onload = () => {
        this.img = img;
        const imgRatio = img.naturalWidth/img.naturalHeight;
  
        this.x = W/2 - (W/12);
        this.y = 45;
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
        this.w = 20;
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



    /*S P R I T E*/

 

  //   let Sprite = class {
  //     constructor() {
  //       const img = document.createElement('img');
  //       img.onload = () => {
  //       this.img = img;
  //       const imgRatio = img.naturalWidth/img.naturalHeight;
  //       this.x = (W/12) * 11;
  //       this.y = H - 150;
  //       this.w = 48;
  //       this.h = this.w/imgRatio;
  //       this.spriteWidth = 210; 
  //       this.spriteHeight = 420; 
  //       this.rows = 4; 
  //       this.cols = 3;         
  //       this.trackUp = 0;
  //       this.trackRight = 1; 
  //       this.trackDown = 2;
  //       this.trackLeft = 3;
  //       this.sWidth = spriteWidth/cols; 
  //       this.sHeight = spriteHeight/rows; 
  //       this.curFrame = 4; 
  //       this.frameCount = 3; 
  //       this.srcX; 
  //       this.srcY; 
  //       this.left = false; 
  //       this.right = false;
  //       this.up = false;
  //       this.down = false;

  //       }
  //       img.src = "https://i.pinimg.com/564x/05/a9/eb/05a9eb42c8722be8d276efcf6145cfdf.jpg";
  //     }
  


  //     updateFrame(){
	// 			this.curFrame = ++this.curFrame % this.frameCount; 				
	// 			this.srcX = this.curFrame * this.sWidth; 
	// 			ctx.clearRect(this.x,this.y,this.sWidth,this.sHeight);	
				
	// 			if(this.left && this.x >= (W/11)){
  //         this.srcY = this.trackLeft * this.sHeight; 
  //         this.x -= (W/12);
  //       }
	// 			if(this.right && this.x <= W - (W/6) - (W/12)){
  //         srcY = trackRight * sHeight; 
  //         this.x += (W/12);
  //       }
        
  //       if(this.up && this.y >= 70){
  //         this.srcY = this.trackUp * this.sHeight; 
  //         this.y -= 30;
  //       }

  //       if(this.down && this.y <= H - 40){
  //         this.srcY = this.trackDown * this.sHeight; 
  //         this.y += 30;
  //       }

	// 		}
			
	// 		draw(){
  //       this.updateFrame();
  //       ctx.drawImage(this.img,this.srcX,this.srcY,this.sHidth,this.sHeight,this.x,this.y,this.sWidth,this.sHeight);
  //     }
			
			
	// 		moveLeft(){
	// 			this.left = true;
  //       this.right = false;
  //       this.up = false;
  //       this.down = false;
	// 		}
            
	// 		moveRight(){
	// 			this.left = false; 
  //       this.right = true;
  //       this.up = false;
  //       this.down = false;
  //     }
      
  //     moveUp(){
	// 			this.left = false; 
  //       this.right = false;
  //       this.up = true;
  //       this.down = false;
  //     }
      
  //     moveBack(){
	// 			this.left = false; 
  //       this.right = false;
  //       this.up = false;
  //       this.down = true;
	// 		}
					
  //  }
      

