var socket;

function setup() {
createCanvas(600,600);
  background(51);
  
  socket = io.connect('http://localhost:3000');
  socket.on('mouse',newDrawing);

}

function newDrawing(data){
noStroke();
fill(100,100,250);
ellipse(data.x,data.y,30,30);
  console.log("recivsing" + data.x + "," + data.y);
}


function mouseDragged(){
//console.log("sending" + mouseX + "," + mouseY);

var data = {
x: mouseX,
y: mouseY
}

socket.emit("mouse",data);

noStroke();
fill(255);
ellipse(mouseX,mouseY,30,30);
}


function mouseClicked(){
//console.log("sending" + mouseX + "," + mouseY);

var data = {
x: mouseX,
y: mouseY
}

socket.emit("mouse",data);

noStroke();
fill(255);
ellipse(mouseX,mouseY,30,30);
}

function draw() {
  socket.on("mouse",newDrawing);
}
