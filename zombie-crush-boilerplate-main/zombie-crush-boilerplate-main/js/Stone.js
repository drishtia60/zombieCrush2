class Stone{
    constructor(x,y,r){
      var options ={
        density :0.1,
        isStatic:true
      };
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("assets/stone.png");
        World.add(world,this.body);
    }
    static(){
    Matter.Body.setStatic(this.body,false);
   }

    display(){
      var pos = this.body.position

      push();
      fill("white");
      image(this.image, pos.x, pos.y,60,60);
      imageMode(CENTER);
      pop();
    }
}