class foot{
    constructor(){
        this.path= []
        this.print = []
        this.image1= loadImage("snow5.webp");

    }

    display(){
        

        var prints= [player.x-5,player.y]
        if(keyCode===39 || keyCode===37 ){
            
            this.print.push(prints);

        }
        console.log(prints)
        for(var k =0; k<this.print.length;k++){
           if(this.print[k][0]%50===0){
            image(this.image1,this.print[k][0] , this.print[k][1]+100,20,10 )
           } 
        }
            //this.print[k].addImage(this.image);
        
       
            
        
     

    }

}