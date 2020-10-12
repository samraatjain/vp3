class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image = loadImage("images/Milk.png");
        

    
    }
    display()
    {
        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed:"+ lastFed%12 + "PM" ,350,30);
        }
        else if(lastFed==0){
            text("Last Feed:"+ lastFed + "AM" ,350,30);
        }
        else{
            text("Last Feed : " + lastFed + "AM",350,30)
        }
    }

    currentTime=hour();
    if(currentTime==(lastFed+1))
    {
        update("Playing");
        foodObj.garden();
    } else if(currentTime==(lastFed+2))
    {
        update("Sleeping");
        foodObj.bedroom();
    }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4))
    {
        update("Bathing");
        foodObj.washroom();
    }else{
        update("Hungry")
        foodObj.display();
    }
    bedroom()
        {
            background(bedroom,550,500);
        }
        garden()
        {
            background(garden,550,500);
        }
        washroom()
        {
            background(washroom,550,500);
        }

       
   


    

}