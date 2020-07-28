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
        this.dir = 'up';
      }
      img.src = "http://silveiraneto.net/wp-content/uploads/2010/05/brazilian_soccer_player.png";
    }
                      
    // ctx.style
    updateFrame(){
      var trackUp = 0;
      var trackRight = 1; 
      var trackDown = 2;
      var trackLeft = 3;
      
      this.curFrame = ++this.curFrame % this.frameCount;
      
      
      this.srcX = this.curFrame * this.sWidth; 
      // ctx.clearRect(this.x,this.y,this.sWidth,this.sHeight);	
  
      if(this.dir === 'left' && this.x >= (this.ctx.canvas.width/11)){ //this.x>0){
        this.srcY = trackLeft * this.sHeight; 
        //this.x -= (canvasWidth/12);
      }
      if(this.dir === 'right' && this.x <= this.ctx.canvas.width - (this.ctx.canvas.width/6) - (this.ctx.canvas.width/12)){ 
        this.srcY = trackRight * this.sHeight; 
        //this.x+=(canvasWidth/12); 
      }
      if(this.dir === 'up' && this.y > 0 ){
        this.srcY = trackUp*this.sHeight; 
        //this.y-=30; 
      }
      if(this.dir === 'down' && this.y <= this.ctx.canvas.height - 40){ 
        this.srcY = trackDown * this.sHeight; 
        //this.y+=30; 
      }
              
    }
          
    draw(){
      if (!this.img) return; 
      
      this.updateFrame();
      //console.log("hello je suis un sprite", this.img, this.srcX, this.srcY)
      ctx.drawImage(this.img,this.srcX,this.srcY,this.sWidth,this.sHeight,this.x,this.y,this.w,this.h); //this.w,this.h);
    }
  
  
    moveLeft(){
      this.dir = 'left'
      this.x -= (this.ctx.canvas.width/12);
    }
  
    moveRight(){
      this.dir = 'right'
      this.x += (this.ctx.canvas.width/12);		
    }
  
    moveUp(){
      this.dir = 'up'
      this.y -= 30;
    }
  
    moveDown(){
      this.dir = 'down'
      this.y += 30;
    }
  
  };
  

// var spriteWidth = 210; 
// var spriteHeight = 420; 
// var rows = 4; 
// var cols = 3;  
// // var width = spriteWidth/cols; 
// // var height = spriteHeight/rows; 
// // var x=0;
// // var y=200; 
// var trackUp = 0;
// var trackRight = 1; 
// var trackDown = 2;
// var trackLeft = 3; 
// var curFrame = 4; 
// var frameCount = 3;
// var srcX; 
// var srcY; 
// var left = false; 
// var right = false;
// var up = false;
// var down = false;
// // var speed = 12; // à supprimer 

//         let Character = class {

//                 constructor() {
//                     const img = document.createElement('img');
//                     img.onload = () => {
//                       this.img = img;
//                       const imgRatio = img.naturalWidth/img.naturalHeight;
//                       this.x = (W/12) * 11;
//                       this.y = H - 150;
//                       this.w = 48;
//                       this.h = this.w/imgRatio;
//                       this.sWidth = spriteWidth/cols; 
//                       this.sHeight = spriteHeight/rows;  
//                     //   this.spriteWidth = 210; 
//                     //   this.spriteHeight = 420; 
//                     //   this.rows = 4; 
//                     //   this.cols = 3;        
//                     //   this.trackUp = 0;
//                     //   this.trackRight = 1; 
//                     //   this.trackDown = 2;
//                     //   this.trackLeft = 3;
//                     //   this.curFrame = 4; 
//                     //   this.frameCount = 3; 
//                     //   this.srcX; 
//                     //   this.srcY;
  
//                     }
//                     img.src = "https://i.pinimg.com/564x/05/a9/eb/05a9eb42c8722be8d276efcf6145cfdf.jpg";
//                   }

                    
//         // ctx.style
        
//         updateFrame(){
//             curFrame = ++curFrame % frameCount; 				
//             srcX = curFrame * this.sWidth; 
//             ctx.clearRect(this.x,this.y,this.sWidth,this.sHeight);	
            
//             if(left && this.x >= (W/11)){ //this.x>0){
//                 this.srcY = trackLeft * this.sHeight; 
//                 this.x -= (W/12);
//            }
//             if(right && this.x <= W - (W/6) - (W/12)){ // this.x< this.sWidth){ //if(right && x< W-sWidth){
//                 this.srcY = trackRight * this.sHeight; 
//                 this.x+=(W/12); 
//             }
//             if(up && this.y > 0 ){
//                 this.srcY = trackUp*this.sHeight; 
//                 this.y-=30; 
//              }
//             if(down && this.y <= H - 40){ //                if(down && this.y < W-sHeight){
//                 this.srcY = trackDown * this.sHeight; 
//                 this.y+=30; 
//              }
            
//         }
        
//         draw(){
//             if (!this.img) return; 
//             this.updateFrame();
//             ctx.drawImage(this.img,this.srcX,this.srcY,this.sWidth,this.sHeight,this.x,this.y,this.sWidth,this.sHeight); //this.w,this.h);
//         }
        
        
//         moveLeft(){
//             left = true; 
//             right = false;
//             up = false;
//             down = false;
//         }
        
//         moveRight(){
//             left = false; 
//             right = true;
//             up = false;
//             down = false;			
//         }
        
//         moveUp(){
//             left = false; 
//             right = false;
//             up = true;
//             down = false;
//         }
  
//         moveDown(){
//             left = false; 
//             right = false;
//             up = false;
//             down = true;
//          }

//     }

        
// // document.onkeydown = function (e) {
// //     switch (e.keyCode) {
// //     // case 32: shoot(); ballsAvailables.pop(); console.log('space'); break;
// //     case 37: sprite.moveLeft();  console.log('left',  ); break;
// //     case 39: sprite.moveRight(); console.log('right', ); break;
// //     case 40: sprite.moveDown(); console.log('back', ); break;
// //     case 38: sprite.moveUp(); console.log('up', ); break;
// //     // case 13: restart(); console.log("Game restarted"); break;
// //     }
// // }