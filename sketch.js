const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,150,50,50);
    box2 = new Box(200,100,50,80);
    box3 = new Box(250,45,90,46);
    box4 = new Box(345,100,25,25);
    box5 = new Box(10,70,25,25);
    ground = new Ground(200,400,400,5);
    ground2 = new Ground(200,0,400,5);
    ground3 = new Ground(0,200,5,400);
    ground4 = new Ground(400,200,5,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

}