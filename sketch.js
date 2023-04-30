var PLAY=1
var END= 0

var gameState=PLAY

var playerCar,car2,car3
var carsGroup,car2,car3
var road,roadImg
var score=0
var gameOver,restart
var collidedSound

function preload(){
playerCar=loadImage("player_car.png")
car2=loadImage("car2.png")
car3=loadImage("car3.png")
collidedSound=loadSound("collided.waw")
roadImg=loadImage("Road.png")
gameOver=loadImage("gameOver.png")
restart=loadImage("restart.png")
}

function setup() {
    createCanvas(windowWidth , windowHeight)

    playerCar = createSprite(width/2+50,height-20,20,20)
    playerCar.addImage("playerCar",playerCar)
    playerCar.scale=0.5
    playerCar.velocityY=-2

    car2 =  createSprite(width/2+50,100,20,20)
    car2.addImage("car2",car2)
    car2.scale=0.2
    car2.velocityY= 2

    car3 =  createSprite(width/2-50,100,20,20)
    car3.addImage("car3",car3)
    car3.scale=0.2
    car3.velocityY= 2

    road = createSprite(width/2,100)
    road.addImage("road",roadImg)
    road.velocityY=4

    gameOver = createSprite(width/2,height/2- 50);
    gameOver.addImage(gameOver);
  
    restart = createSprite(width/2,height/2);
    restart.addImage(restart)

    gameOver.visible = false
    gameOver.visible = false

    score=0
  

 
}

function draw() {

    background(200);
    if(gameState==="PLAY"){
    
    if(road.y>height){
       road.y=height/2
    }

    if(keyDown("left arroow")){
       playerCar.x=playerCar.x-2
       
    }

    if(keyDown("right arroow")){
        playerCar.x=playerCar.x+2
     }
     
     if(keyDown("up arroow")){
        playerCar.y=playerCar.y-2
     }
     
     if(car2.isTouching(playerCar)){
        playerCar.velocityY=0
        car2.destroy()
     }

     if(car3.isTouching(playerCar)){
        playerCar.velocityY=0
        car3.destroy()
        gameState="end"
    }
    }
    
    if (gameState==="end"){
    gameOver.visible=true
    restart.visible=true
    road.velocity=0
    playerCar.velocityY=0
    car2.velocityY=0
    car3.velocityY=0
}
    spawnCar2()
    spawCar3()
    drawSprites()
}

function SpawnCar2(){
    if (frameCount % 200===0){
    car2 = createSprite(width/2,height-50,20,20)
    car2.x=Math.round(random(100,200))
    car2.addImage(car2)
    car2.scale=0.5
    car2.velocityY=-2
    
    car2.lifetime = 500;
    }
}
function SpawnCar3(){
    if (frameCount % 300===0){
    car3 = createSprite(width/2,height-50,20,20)
    car3.x=Math.round(random(100,200))
    car3.addImage(car2)
    car3.scale=0.5
    car3.velocityY=-2

    car3.lifetime = 500;
    }
}

    
function reset(){
    gamestate=PLAY
    gameOver.visible=false
    restart.visible=false
    car2.destroy()
    car3.destroy()
    score=0
}