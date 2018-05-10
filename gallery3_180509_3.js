var img1;
var size;

function setup() {
  img1=loadImage("img1.jpg");
  createCanvas(700,543);
  background(0);
  size=80;
}

function draw() {
  noStorke();
  for(var y=0;y<img1.height;y+=10){
    for(var x=0;y<img1.width;x+=10){
      var c = img1.get(x,y);
      fill(red(C));
      ellipse(x+5,y+5,10,10);
      if(dist(mouseX,mouseY,x+5,y+5)<size){
        fill(c);
        ellipse(x+5,y+5,10,10);
      }
    }
  }
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    size+=1;
  }
  else if(keyCode==DOWN_ARROW){
    size-=1;
  }
}