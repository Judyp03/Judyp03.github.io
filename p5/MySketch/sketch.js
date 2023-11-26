let a = 0; 
let b = 0; 
let c = 0;

function setup() {
  createCanvas(800, 600);
  stroke(400);
}

function draw() {
  background('purple');

  a = a + 3; 
  b = b + 0.8; 
  c = c + 5;
  stroke("#251AE1");
  strokeWeight(10);
  fill("#CFE607");
  ellipse(a, 5, a, height / 2);
  ellipse(b, height / 3, b, height);
  rect(c, 10, c, height / 1);

  if (a > width) {
    a = 0;
  }
  if (b > width) {
    b = 0;
	}
	if (c > width) {
		c = 0;
	}
 }

