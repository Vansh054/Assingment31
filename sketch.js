const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var particles = []
var plinkos = []
var divisions = []


var divisionHeight = 300

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,500,20)

  for (a = 0; a<= width; a = a+80)
  {
    Bucket = new Division(a,height - divisionHeight/2,10,divisionHeight)
    divisions.push(Bucket)
  }

  for (b = 40;b<=width;b = b+50)
  {
    plinko = new Plinko(b,75)
    plinkos.push(plinko)
  }

  for (c = 15;c<=width;c=c+50)
  {
    plinko = new Plinko(c,175)
    plinkos.push(plinko)
  }
   
  for (d = 40;d<=width;d = d+50)
  {
    plinko = new Plinko(d,275)
    plinkos.push(plinko)
  }
   
  for (e = 15;e<=width;e = e+50)
  {
    plinko = new Plinko(e,375)
    plinkos.push(plinko)
  }
  
  Engine.run(engine);
  
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  if (frameCount %  60 == 0)
  {
    particle = new Particle(random(width/2-10,width/2+10),15,10)
    particles.push(particle)
  }
  
  for (f = 0; f < divisions.length; f++ )
  {
   divisions[f].display();
  }

  for (g = 0; g < plinkos.length; g++ )
  {
   plinkos[g].display();
  }
  
  for (h = 0; h < particles.length; h++ )
  {
    particles[h].display();
  }
}