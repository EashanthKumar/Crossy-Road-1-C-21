var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var car;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1566,2700);
  carGroup1 = createGroup();
  logGroup1 = createGroup();
  
     
      for(var i = 0; i<6; i++){
        
        var bottomGrass1 = createSprite(683, height - 50 -(i*400), width, grassHeight);
        if(i % 2 === 0){
             var road = createSprite(683, height - 150 - (i*400) - grassHeight, width, 300);
             road.shapeColour = "black";
        }
        
           bottomGrass1.shapeColour = "green";
      }
      
      for(var i = 0; i < 60; i++){
        car = new Car(3);
        carGroup1.add(car.spt);
      }

      for(var i = 0; i < 60; i++){
        log = new Log(3);
        logGroup1.add(log.spt);
      }

      
    
 }

function draw() {
  background("skyblue");

  for(i = 1; i<carGroup1.length; i++){
    if(carGroup1[i].x > width)
    { 
      carGroup1[i].x = 0;
    }
    if(carGroup1[i].x < 0)
    {
      carGroup1[i].x = width;
    }
  }


  for(i = 1; i<logGroup1.length;i++){
        if (logGroup1[i].x < 0)
        {
          logGroup1[i].x=width;
        }
      }
  
  

  drawSprites();
}
