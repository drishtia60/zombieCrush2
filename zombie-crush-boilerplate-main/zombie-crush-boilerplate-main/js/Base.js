class Base{
    constructor(x,y,w,h,isStatic){
        var options = {
            isStatic: isStatic
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;

        World.add(world,this.body);
    }

  display(){
      var pos = this.body.position
      push();
      rectMode(CENTER)
      fill("white");
      rect(pos.x,pos.y,this.w,this.h);
      pop();
  }
}