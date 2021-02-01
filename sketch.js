const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;


var engine, world;
var ground, stand, stand1;
var box1, box2, box3, box4, box4, box5, box6, box7,box8, box9;
var box10, box11, box12, box13, box14,box15;
var polygon, polygonIMG;
var sling;
var score=0;

function preload(){
polygonIMG= loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(590, 930, 2000, 30);
    stand= new Ground(600, 800, 350, 30);
    stand1= new Ground(850, 400, 350 ,30);
    box1= new Box(600,750,50,80);
    box2= new Box(550,750,50,80);
    box3= new Box(650,750,50,80);
    box4= new Box(700,750,50,80);
    box5= new Box(500,750,50,80);
    box6= new Box(650,670,50,80);
    box7= new Box(600,670,50,80);
    box8= new Box(550,670,50,80);
    box9= new Box(600,590,50,80);
    box10= new Box(850,345,50,80);
    box11= new Box(800,345,50,80);
    box12= new Box(900,345,50,80);
    box13= new Box(881,265,50,80);
    box14= new Box(830,265,50,80);
    box15= new Box(860,185,50,80);
    //var optionsp={
       // isStatic:true
 //   }
    polygon= Bodies.circle(200,500,20);
    World.add(world,polygon);
    sling= new Slingshot(this.polygon,{x:400, y:500});
}

function draw(){
    background(0,255,255);
    Engine.update(engine);
    textSize(50);
    text("SCORE : "+score, 750, 40);
    imageMode(CENTER);
    image(polygonIMG, polygon.position.x, polygon.position.y, 40,40);
    ground.display();
    stand.display();
    stand1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    sling.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();

    drawSprites();
}
function mouseDragged(){ 
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}); 
}
function mouseReleased(){
   sling.fly();
   // gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.polygon);
    }
}

