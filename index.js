
    function myFuction(){
     var Side1=parseInter(document.getElementById("side1").value);
     var Side2=parseInter(document.getElementById("side2").value);
     var Side3=parseInter(document.getElementById("side3").value);

      if (Side1===Side2&&Side1===Side3&&Side2===Side3){
     alert("Equilateral triangle");
    }
    
     else if(Side1===Side2||Side1===Side3||Side2===Side3){
    alert("Isosceles triangle");
    }
    
    else if(Side1+Side2>Side3&&Side1+Side3>Side2&&Side2+Side3>
        
        Side1){
    alert("scalene triangle");
    }
    
    else{
    alert("Not triangle")
    }
