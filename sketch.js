var value = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  setMoveThreshold(15);
}

function draw() {
  background(63, 0, 255);
  fill(255);
  textAlign(CENTER);
  textSize(80);
  text('Wiggle Me',width/2,750);

  for(var i=0;i<=height/300+3;i++){
    for(var j=0;j<=width/200+3;j++){
      var r = 15;
      if (r<10) {
        fill(value,value,r*100,70);
      } else {
        fill(r*50,value,value,r*100,300);
      }
      ellipse(j*200,200*i,value);
    }
  }

  if(value>150){
    value=20;
  }

}

function deviceMoved() {
  value++;
}
