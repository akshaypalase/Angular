interface Playerdetail1 {
    Name : string;	
    Born : any;	
    Age	 : number;
    
     }
     
     interface Playerdetail2{
         Birth_Place : string;
         Role : string;
          }
      interface Playerdetail extends Playerdetail1,Playerdetail2{
       Bat_Style : string;
       Bowl_Style: string;
      }
       
    var Player :Playerdetail={
        Name : "Suryakumar Yadav",
        Born : "Sep 14, 1990 ",
        Age	 :  32,
        Birth_Place : "Mumbai, Maharashtra",
        Role : "Batsman",
        Bat_Style :"Right Handed Bat",
        Bowl_Style: "Right-arm offbreak"
    
    }