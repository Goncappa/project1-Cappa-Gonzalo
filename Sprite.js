/*

         _
        |.|
        ]^[
      ,-|||~\
     {<|||||>}
      \|||||/
      {/   \}
      /__9__\
      | / \ |
      (<   >)
     _|)   (|_
,.,.(  |.,.|  ).,.,.

*/


let Character = class {

    constructor(ctx) {
      var spriteWidth = 210; 
      var spriteHeight = 420;
      var rows = 4; 
      var cols = 3;  
  
      
      
      const img = document.createElement('img');
      img.onload = () => {
        this.ctx = ctx
        this.img = img;
        const imgRatio = img.naturalWidth/img.naturalHeight;
        this.x = (this.ctx.canvas.width/12) * 11;
        this.y = this.ctx.canvas.height - 100;
        this.w = this.ctx.canvas.width/13;
        this.h = this.w/imgRatio;
        this.sWidth = spriteWidth/cols; 
        this.sHeight = spriteHeight/rows;  
        this.srcX = 0;
        this.srcY = 0;
        this.curFrame = 4;
        this.frameCount = 3;
        this.dir = 'up';
      }
      img.src = "images/miniplayer1.png";
    }
                      
    updateFrame(){
      var trackUp = 0;
      var trackRight = 1; 
      var trackDown = 2;
      var trackLeft = 3;
      
      if (frames % 5 === 0) {
      this.curFrame = ++this.curFrame % this.frameCount;
      }
      
      this.srcX = this.curFrame * this.sWidth; 
  
    if(this.dir === 'left'){ 
        this.srcY = trackLeft * this.sHeight; 
      }
      if(this.dir === 'right'){ 
        this.srcY = trackRight * this.sHeight; 
      }
      if(this.dir === 'up'){ 
        this.srcY = trackUp*this.sHeight; 

    }
      if(this.dir === 'down'){ 
        this.srcY = trackDown * this.sHeight; 
      }
              
    }
          
    draw(){
      if (!this.img) return; 
      this.updateFrame();
      ctx.drawImage(this.img,this.srcX,this.srcY,this.sWidth,this.sHeight,this.x,this.y,this.w,this.h); 
    }
  
  
    moveLeft(){
      this.dir = 'left'
      if(this.x >= (this.ctx.canvas.width/11) && this.y <= this.ctx.canvas.height - 130){
      this.x -= (this.ctx.canvas.width/12);
      }
    }
  
    moveRight(){
      this.dir = 'right'
      if (this.x <= this.ctx.canvas.width - (this.ctx.canvas.width/6) - (this.ctx.canvas.width/12)){
      this.x += (this.ctx.canvas.width/12);	
      }	
    }
  
    moveUp(){
      this.dir = 'up'
      if (this.y >= 90) {
      this.y -= 30;
      }
    }
  
    moveDown(){
      this.dir = 'down'
      if (this.y <= this.ctx.canvas.height - 140){
      this.y += 30;
      }
    }
  
  };
  

/* DEFENSE

           _          _          _          _          _        
          |.|        |.|        |.|        |.|        |.|      
          ]^[        ]^[        ]^[        ]^[        ]^[     
        /~`-'~\    /~`-'~\    /~`-'~\    /~`-'~\    /~`-'~\    
       {<|%  |>}  {<|%  |>}  {<|%  |>}  {<|%  |>}  {<|%  |>}   
        \|___|/    \|___|/    \|___|/    \|___|/    \|___|/    
       /\    \      /   \      /   \      /   \      /   \     
       |/>/|__\    /__|__\    /__|__\    /__|__\    /__|__\    
      _|)   \ |    | / \ |    | / \ |    | / \ |    | / \ |    
     (_,|    \)    (/   \)    (/   \)    (/   \)    (/   \)    
     / \     (|_  _|)   (|_  _|)   (|_  _|)   (|_  _|)   (|_  
  .,.\_/,...,|,_)(_,|,.,|,_)(_,|,.,|,_)(_,|,.,|,_)(_,|,.,|,_)
*/
  let Character2 = class {

    constructor(ctx) {
      var spriteWidth = 210; 
      var spriteHeight = 420;
      var rows = 4; 
      var cols = 3;  
  
      
      
      const img = document.createElement('img');
      img.onload = () => {
        this.ctx = ctx
        this.img = img;
        const imgRatio = img.naturalWidth/img.naturalHeight;
        this.x = ((this.ctx.canvas.width/12) * (Math.floor(Math.random()* 10) + 1)) //- (W/12);
        this.y = 0;
        this.w = this.ctx.canvas.width/13;
        this.h = this.w/imgRatio;
        this.sWidth = spriteWidth/cols; 
        this.sHeight = spriteHeight/rows;  
        this.srcX = 0;
        this.srcY = 0;
        this.curFrame = 4;
        this.frameCount = 3;
        this.dir = 'down';
      }
      img.src = "images/player2mini.png";
    }
                      
    updateFrame(){
      var trackUp = 0;
      var trackRight = 1; 
      var trackDown = 2;
      var trackLeft = 3;
      
      if (frames % 4 === 0) {
      this.curFrame = ++this.curFrame % this.frameCount;
      }
      
      this.srcX = this.curFrame * this.sWidth; 
  
    if(this.dir === 'left'){ 
        this.srcY = trackLeft * this.sHeight; 
      }
      if(this.dir === 'right'){ 
        this.srcY = trackRight * this.sHeight; 
      }
      if(this.dir === 'up'){ 
        this.srcY = trackUp*this.sHeight; 

    }
      if(this.dir === 'down'){ 
        this.srcY = trackDown * this.sHeight; 
      }
              
    }
          
    draw(){
      if (!this.img) return; 
      this.updateFrame();
      ctx.drawImage(this.img,this.srcX,this.srcY,this.sWidth,this.sHeight,this.x,this.y,this.w,this.h); 
    }
  
    moveDown(){
      this.dir = 'down'
      if (this.y <= this.ctx.canvas.height - 40){
      this.y += 30;
      }
    }

    hits(player) {
        return (
          (player.x+player.w >= this.x && player.x <= this.x+this.w) 
          &&
          (player.y <= (this.y+this.h - 35) && (player.y+player.h-35) >= this.y)
        );
    }
  
  };

