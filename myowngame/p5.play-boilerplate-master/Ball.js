class Ball{
    constructor(x,y,r){
       this.x=x;
       this.y=y;
       this.r=r;
       this.body= Bodies.circle(x,y,this.r);
       this.image = loadImage("baseball.gif");
       World . add(world,this.body);
    }

display(){
image(this.image,0,0,50);
}
}

