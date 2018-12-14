function myFuction1()
    var Side1=document.getElementById("Side1")   .value;
    var Side2=document.getElementById("Side2") .value;
    var Side3=document.getElementById("Side3")  .value;

      if (fisrtSide===secondSide&&fisrtSide===thirdSide&&secondSide===thirdSide){
     }alert("Equilateral triangle");
     console.log("Equilateral");
    }
    else if("Side1===Side2||Side1===Side3||Side2===Side3"){
    alert("Isosceles triangle");
    console.log("Isosceles triangle");
    }
    else if(fisrtSide+secondSide>thirdSide&&fisrtSide+thirdSide>secondSide&&secondSide+thirdSide>fisrtSide){
    alert("scalene triangle");
    console.log("Scalene triangle");
    }
    else{
    alert("Not triangle")
    }