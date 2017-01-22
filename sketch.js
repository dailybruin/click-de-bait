//speech bubble 1

var c14x = 900;
var c14y = 700;
var c14r = 400;

//speech bubble 2
var c13x = 1500;
var c13y = 600;
var c13r = 400;

var c12x = 400;
var c12y = 600;
var c12w = 1250;
var c12h = 400;

function setup() {
  var canvas = createCanvas(2000, 1300);
  canvas.parent('sketch-holder');
}


function preload() {
  img1 = loadImage("background.jpg");
  img2 = loadImage("speechbubble1.png");
  img3 = loadImage("speechbubble2.png");
  img4 = loadImage("names.png");
}

function draw() {
  background(244, 108, 66);


  image(img1, 260, -100, 1500, 1215);
  image(img2, 260, -100, 1500, 1215);
  image(img3, 260, -100, 1500, 1215);



   if (overCircle(c14x, c14y, c14r)) {
        image(img2, 260, -100, 1500, 1215);
				fill(255);
				noStroke();
				}  else {
			  noFill();
				stroke(0, 102, 153);
				}


    		//****** second button
       if (overCircle(c13x, c13y, c13r)) {

         image(img3, 260, -100, 1500, 1215);

				}  else {
			  noFill();
				stroke(0, 102, 153);
				}


  if (overRect(c12x, c12y, c12w, c12h)) {

         image(img4, 260, -100, 1500, 1215);

				}  else {
			  noFill();
				stroke(0, 102, 153);
				}
}


function overCircle(x, y, radius) {
	if (dist(x, y, mouseX, mouseY) < radius) {
	  return true;
	} else {
	  return false;
	}
}

function overRect(x, y, w, h) {
	if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
		return true;
	} else {
		return false;
	}
}
