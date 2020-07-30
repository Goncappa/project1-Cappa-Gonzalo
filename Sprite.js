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
        this.y = this.ctx.canvas.height - 150;
        this.w = 48;
        this.h = this.w/imgRatio;
        this.sWidth = spriteWidth/cols; 
        this.sHeight = spriteHeight/rows;  
        this.srcX = 0;
        this.srcY = 0;
        this.curFrame = 4;
        this.frameCount = 3;
        this.dir = 'left';
      }
      img.src = "images/Miniplayer1.png";
    }
                      
    // ctx.style
    updateFrame(){
      var trackUp = 0;
      var trackRight = 1; 
      var trackDown = 2;
      var trackLeft = 3;
      
      if (frames % 5 === 0) {
      this.curFrame = ++this.curFrame % this.frameCount;
      }
      
      this.srcX = this.curFrame * this.sWidth; 
      // ctx.clearRect(this.x,this.y,this.sWidth,this.sHeight);	
  
    if(this.dir === 'left'){ // && this.x >= (this.ctx.canvas.width/11)){ 
        this.srcY = trackLeft * this.sHeight; 
        //this.x -= (canvasWidth/12);
      }
      if(this.dir === 'right'){ // && this.x <= this.ctx.canvas.width - (this.ctx.canvas.width/6) - (this.ctx.canvas.width/12)){ 
        this.srcY = trackRight * this.sHeight; 
        //this.x+=(canvasWidth/12); 
      }
      if(this.dir === 'up'){ // && this.y > 0 ){
        this.srcY = trackUp*this.sHeight; 
        //this.y-=30; 
      }
      if(this.dir === 'down'){ // && this.y <= this.ctx.canvas.height - 40){ 
        this.srcY = trackDown * this.sHeight; 
        //this.y+=30; 
      }
              
    }
          
    draw(){
      if (!this.img) return; 
      this.updateFrame();
      ctx.drawImage(this.img,this.srcX,this.srcY,this.sWidth,this.sHeight,this.x,this.y,this.w,this.h); 
    }
  
  
    moveLeft(){
      this.dir = 'left'
      if(this.x >= (this.ctx.canvas.width/11)){
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
      if (this.y <= this.ctx.canvas.height - 40){
      this.y += 30;
      }
    }
  
  };
  


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
        this.w = 48;
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
                      
    // ctx.style
    updateFrame(){
      var trackUp = 0;
      var trackRight = 1; 
      var trackDown = 2;
      var trackLeft = 3;
      
      if (frames % 4 === 0) {
      this.curFrame = ++this.curFrame % this.frameCount;
      }
      
      this.srcX = this.curFrame * this.sWidth; 
      // ctx.clearRect(this.x,this.y,this.sWidth,this.sHeight);	
  
    if(this.dir === 'left'){ // && this.x >= (this.ctx.canvas.width/11)){ 
        this.srcY = trackLeft * this.sHeight; 
        //this.x -= (canvasWidth/12);
      }
      if(this.dir === 'right'){ // && this.x <= this.ctx.canvas.width - (this.ctx.canvas.width/6) - (this.ctx.canvas.width/12)){ 
        this.srcY = trackRight * this.sHeight; 
        //this.x+=(canvasWidth/12); 
      }
      if(this.dir === 'up'){ // && this.y > 0 ){
        this.srcY = trackUp*this.sHeight; 
        //this.y-=30; 
      }
      if(this.dir === 'down'){ // && this.y <= this.ctx.canvas.height - 40){ 
        this.srcY = trackDown * this.sHeight; 
        //this.y+=30; 
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

