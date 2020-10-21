class Log{

constructor(x,y,width,height){

var log_options = {

restitution:0.8,
friction:1.0,
isStatic:true,
density:1

}
this.body = Bodies.rectangle(x,y,width,height,log_options);
this.w = width;
this.h = height;

World.add(world,this.body);

}

display(){

    var pos = this.body.position;

    rectMode(CENTER);
    fill("red")
    rect(pos.x,pos.y,this.w,this.h);
  

}
}