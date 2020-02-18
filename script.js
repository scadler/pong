//creating canvas & getting context
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

//draw functions 
function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}
function drawCircle(x, y, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false);
    context.closePath();
    context.fill();
}
//14:40
function drawText(text, x, y, color){
    context.fillStyle = color;
    // context.font = "75px fantasy";
    context.fillText(text, x, y);
}
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i , net.width, net.height, net.color);
    }
}
function collision(ball, paddle){
    paddle.top = paddle.y;
    paddle.bottom = paddle.y + paddle.height;
}
//defining constants
const user = {
    x : 0,
    y : (canvas.height/2)-50,
    width : 10,
    height : 100,
    color : "White",
    score : 0,
}
const comp = {
    x :  canvas.width - 10,
    y : (canvas.height/2)-50,
    width : 10,
    height : 100,
    color : "White",
    score : 0,
}
const net = {
    x : canvas.width/2 - 2/2,
    y : 0,
    width : 2,
    height : 10,
    color : "White",
}
const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    speed : 5,
    velocityX : 5,
    velocityY : 5,
    color : "White",
}
const framesPerSecond = 50;
//calling functions
function update(){
    ball.x = ball.velocityX;
    ball.y += ball.velocityY;
    if( ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
        //ball has hit top or bottom
        velocityY = - velocityY;
    }
}
function render(){
drawRect(0, 0, canvas.width, canvas.height, "black");
drawText(user.score, canvas.width/4, canvas.hieght/5,  "White");
drawText(comp.score, 3*canvas.width/4, canvas.hieght/5,  "White");
drawNet();
drawRect(user.x, user.y, user.width, user.height, user.color);
drawRect(comp.x, comp.y, comp.width, comp.height, comp.color);
drawCircle(ball.x, ball.y, ball.radius, ball.color)
}
function game(){
    update();
    render();
}
setInterval(game(), 1000/framesPerSecond);