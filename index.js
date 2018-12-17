f
    function myFuction1(){
     var Side1=parseInter(document.getElementById("Side1").value);
     var Side2=parseInter(document.getElementById("Side2").value);
     var Side3=parseInter(document.getElementById("Side3") .value);

      if (Side1===Side2&&Side1===Side3&&Side2===Side3){
     alert("Equilateral triangle");
    }
    
     else if(Side1===Side2||Side1===Side3||Side2===Side3){
    alert("Isosceles triangle");
}
    
    else if(fisrtSide+secondSide>thirdSide&&fisrtSide+thirdSide>secondSide&&secondSide+thirdSide>fisrtSide){
    alert("scalene triangle");
}
    
    else{
    alert("Not triangle")
    }
}