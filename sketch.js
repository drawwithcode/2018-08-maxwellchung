var value = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  setMoveThreshold(5);
}

function draw() {
  background(0);
  fill(255-value*10);
  textAlign(CENTER);
  textSize(50);
  text('Wiggle!',width/2,450);
   for(var j=0;j<=width/250+15;j++){
	for(var i=0;i<=height/50+45;i++){

      var r = random(250);
      if (r<2) {
        fill(value,value,r*50,450);
      } else {
        stroke(r*10,value,value,350);
      }
      rect(j*500,400*j,value);
    }
  }

  if(value>650){
    value=random(120);
  }

}

function deviceMoved() {
  value++;
}
