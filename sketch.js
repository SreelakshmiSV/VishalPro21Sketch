var canvas;
var music;
var blue;
var yellow;
var pink;
var green;
var ball,edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    blue = createSprite(100,550,190,20);
    blue.shapeColor = rgb(0,0,255);
    yellow = createSprite(300,550,190,20);
    yellow.shapeColor = rgb(255,255,0);
    pink = createSprite(500,550,190,20);
    pink.shapeColor = rgb(255,100,203);
    green = createSprite(700,550,190,20);
    green.shapeColor = rgb(0,255,0);

    ball = createSprite(random(20,720),50,30,30);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityX=4;
    ball.velocityY=9;
    //create box sprite and give velocity

}

function draw() {
    background("black");
    
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(blue.isTouching(ball) && ball.bounceOff(blue)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(yellow.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(pink.isTouching(ball) && ball.bounceOff(pink)){
        ball.shapeColor = rgb(255,100,203);
    }

    if(green.isTouching(ball) && ball.bounceOff(green)){
        ball.shapeColor = rgb(0,255,0);
    }
    
    


    //add condition to check if box touching surface and make it box
    drawSprites();
}
