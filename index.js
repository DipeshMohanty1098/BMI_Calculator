function CalculateBMI(){
    var Weight = document.getElementById("Weight").value;
    var Height = document.getElementById("Height").value;
    if (Weight == '' || Height == ''){
        alert("Please fill in the fields to calculate!");
    }
    else{
    console.log((Weight/(Height*Height)));
        if ((Weight/(Height*Height)) < 18.5){
            document.getElementById("ans").innerHTML = (Weight/(Height*Height)) + "\n" + ",You are Underweight";
        }
        else if (((Weight/(Height*Height)) > 18.5) & ((Weight/(Height*Height)) < 24.9)){
            document.getElementById("ans").innerHTML = (Weight/(Height*Height)) + "\n" + ",You have a healthy weight";
        }
        else if (((Weight/(Height*Height)) > 24.9) & ((Weight/(Height*Height)) < 29.9)){
            document.getElementById("ans").innerHTML = (Weight/(Height*Height)) + ",You are Overweight";
        }
        else {
            document.getElementById("ans").innerHTML = (Weight/(Height*Height)) + ",You are Obese";
        }
    }
}



