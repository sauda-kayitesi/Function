function myFuction1()
    var fisrtSide=document.getElementById("fisrtSide1")   .value;
    var secondSide=document.getElementById("secondSide2") .value;
    var thirdSide=document.getElementById("thirdtSide3")  .value;

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
    alert("Not triangle");
    }