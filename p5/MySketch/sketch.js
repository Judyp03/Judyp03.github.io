let value1 = 172;
let value2 = 227;
let value3 = 233;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(230,165,151);
  text("love", 45, 200);
  textSize(200);
  strokeWeight(10);

  fill(value1,value2,value3);
  ellipse(400,400,400,400);
}

function mouseClicked() {

  if (value1 == 150) {
    value1 = 181;
    value2 = 232;
    value3 = 172;
  }else{
    value1 = 150;
    value2 = 26;
    value3 = 128;
  }

}
