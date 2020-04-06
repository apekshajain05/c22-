const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options={
        restitution:0.3
    }
    ball=Bodies.circle(200,40,35,ball_options);
    World.add(world,ball);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

        
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,35,35);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
}