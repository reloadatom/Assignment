var diam1=0;
var diam2=0;
var diam3=0;
function setup() {
  createCanvas(450,450);
    
}

function draw() {
 background("#00cc99");
    fill("#ff6666");
    stroke("#ff9999");
    strokeWeight(5);
    ellipse(100,80,diam1,diam1);
 
    fill("#9999ff");
    stroke("#ccccff");
    strokeWeight(5);
    ellipse(350,80,diam2,diam2);
    
   fill("#ffccff");
    stroke("#ffe6ff");
    strokeWeight(5);
   triangle(30, 75, 58, 20, 86, 75);
    
       fill("#9999ff");
    stroke("#ccccff");
    strokeWeight(5);
   triangle(300, 250, 150, 200, 400, 350);
    
    textSize(20);
    textFont("Arial");
    textStyle(BOLD);
    textAlign(LEFT);
    text("click your mouse",15,15);
    
    fill("#ff6666");
    stroke("#ff9999");
    strokeWeight(5);
   triangle(300, 20, 400, 56, 220, 100);
    
    fill("#ffccff");
    stroke("#ffe6ff");
    strokeWeight(5);
    ellipse(200,300,diam3,diam3);
    
    textSize(40);
    textFont("Helvetica");
    textStyle(BOLD);
    textAlign(CENTER);
    text("Hello There",mouseX,mouseY);
    
}

function mousePressed(){
       diam1=diam1=+80;
    diam2=diam2=+120;
    diam3=diam3=+160;
}