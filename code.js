const FRAMERATE = 10;
const width = window.innerWidth;
const height = window.innerHeight;

window.onload = function () {
    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");

    update(ctx)

}

function update(ctx) {
    setInterval(game, 1000 / FRAMERATE,ctx);
}

function game(ctx) {
    ctx.clearRect(0,0,width,height)
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(Math.floor(Math.random()*width-10),Math.ceil(Math.random()*height-10),10,10);
}