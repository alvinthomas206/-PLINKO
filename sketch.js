 Engine = Matter.Engine;
 World = Matter.World;
 Events = Matter.Events;
 Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground1 =new Ground(240,790,480,20)
  boder1=new boder(240,800,500,20)
  boder2=new boder(240,0,500,20)
  boder3=new boder(0,400,20,800)
  boder4=new boder(480,400,20,800)

   for (var i =15; i <=width; i = i + 75) {
     divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var i = 45; i <=width; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,75));
    }

    for (var i = 30; i <=width-10; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,175));
    }

     for (var i = 45; i <=width; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,275));
    }

     for (var i = 30; i <=width-10; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,375));
    }

    

    
}
 


function draw() {
  background(0);
 

  Engine.update(engine);

 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%50===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
   }
 
  for (var i = 0; i < particles.length; i++) {
   
     particles[i].display();
   }

   for (var i = 0; i < divisions.length; i++) {
     
     divisions[i].display();
   }

   
  ground1.display();
  boder1.display();
  boder2.display();
  boder3.display();
  boder4.display();
}
