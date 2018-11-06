function preload(){
  // put preload code here
}
var cam;
var mic;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  ellipseMode(CENTER);
  imageMode(CENTER);

  cam = createCapture(VIDEO);
  cam.size(640,480);
  cam.hide();
  ellipseMode(CENTER);
  rectMode(CENTER);
  noStroke();

  mic= new p5.AudioIn();
mic.start();
}

function draw() {
    background(255);
  // put drawing code here
  //translate(windowWidth/2,windowHeight/2);
  var vol=mic.getLevel();
myImage = cam.loadPixels();

image(myImage,windowWidth/2,windowHeight/2,640,480);
filter(GRAY);
/*for (var y= 0; y<windowHeight; y+=20);{
  for (var x= 0; x<windowHeight; x+=20){
//var myColor= get(x,y);
fill("red");
ellipse(x,y,20);
  }
}*/
push();
translate(windowWidth/2,windowHeight/2);
translate(-315,-235);
for(var x = 0; x < cam.width; x += 10) {
    for(var y = 0; y <cam.height; y += 10) {
      var myColor= myImage.get(x,y);
      fill(myColor);
      ellipse(x, y, vol*50);
    }
  }
  pop();

/*var myColor= get(windowWidth/2,windowHeight/2);
fill(myColor);
ellipse(windowWidth/2,windowHeight/2,20);*/
  /*for (var y = 0; y < cam.height; y += 10) {
    for (var x = 0; x <cam.width; x += 5) {
      var offset = ((y*cam.width)+x)*4;
      var xpos = (x / cam.width) * width;
      var ypos = (y / cam.height) * height;
      rect(xpos, ypos, 10, 10 * (cam.pixels[offset+1]/255));
    }
  }*/
}
