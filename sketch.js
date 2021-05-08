var canvas;
var music;
var  b1,b2,b3,b4,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(900,600);

    //create 4 different surfaces
    b1= createSprite(150,550,200,50) ;
    b1.shapeColor= "red";

    b2= createSprite(350,550,200,50) ;
    b2.shapeColor= "green";

    b3= createSprite(550,550,200,50) ;
    b3.shapeColor= "yellow";
    
    b4= createSprite(750,550,200,50) ;
    b4.shapeColor= "blue";

    b5= createSprite(random(20,750),150,50,50) ;
    b5.shapeColor= "white";

    b5.velocityX = 5
    b5.velocityY = 5
    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite
edges=createEdgeSprites();
b5.bounceOff(edges);
if (b5.isTouching(b1) && b5.bounceOff(b1)){
    b5.shapeColor = "red";
    music.play()
}
if (b5.isTouching(b2) && b5.bounceOff(b2)){
    b5.shapeColor = "green";
    music.play()
}
if (b5.isTouching(b3) && b5.bounceOff(b3)){
    b5.shapeColor = "yellow";
    music.play()
}
if (b5.isTouching(b4) && b5.bounceOff(b4)){
    b5.shapeColor = "blue";
    music.stop()
    b5.velocityX=0
    b5.velocityY=0
}


    drawSprites()

    //add condition to check if box touching surface and make it box
}
