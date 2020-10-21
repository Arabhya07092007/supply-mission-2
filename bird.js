class Bird {

constructor(x,y){

var bird_options = {

    density:1.5,
    friction:1,
    restitution: 0.5

}

this.body = Bodies.rectangle(x,y,50,50,bird_options);
this.w = 50;
this.h = 50;
World.add(world,this.body);

}

display(){

var pos = this.body.position;
pos.x =  mouseX;
pos.y = mouseY;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("green");
rect(0,0,this.w,this.h);
pop();

}

}