
let res=0;
function calculate()
{
let name=document.getElementById("name").value;
let height=document.getElementById("height").value;
let weight=document.getElementById("weight").value;
console.log(name + " " + height + " "+ weight);
if(name==="" || height==="undefined" || weight==="undefined")
alert("Please enter the details:)");
else{
    let mtr=height/100;
    let bmi=weight/(mtr*mtr);
    res=parseFloat(bmi).toFixed(2);
    localStorage.setItem('bmi',res);
    let val;
    if(res<16)
    val="Severe thinness";
    else if(res>=16&&res<=17)
    val="moderate thinness";
    else if(res>17 && res<=18.5)
    val="mild thinness";
    else if(res>18.5 && res<=25)
    val="normal";
    else if(res>25 && res<=30)
    val="overweight";
    else if(res>30&& res<=35)
    val="obese class I";
    else if(res>35 && res<=40)
    val="obese class II";
    else
    val="obese class III"

    result.innerHTML="Dear "+name+", Your BMI is "+res+" - "+val;

}
}
function food()
{
    window.location.href="food.html";
}
function redirect()
{
        if(res!=0)
        window.location.href="detail.html";
        else 
        alert("Find your BMI");
    }
   
  

function nutrition()
{
    let bmi=localStorage.getItem('bmi');
    if(bmi>18.5 && bmi<=25)
    window.location.href="normal_nutrition.html";
    else if(bmi>25)
    window.location.href="obesity_nutrition.html";
    else
    window.location.href="weak_nutrition.html";
}

function mensdirect()
{
    window.location.href="mensuration.html";
}
function mensuration()
   {
    let time=document.getElementById("time").value;
    let mensdays=document.getElementById("mensdays").value;
    if(time===""|| mensdays==="")
    alert("Please fill out the fields")
    else{
        if(mensdays>=21 && mensdays<=35)
    window.location.href="goodmens.html";
    else
    window.location.href="badmens.html";
    }
    
   }
   function risk()
{    
    let bmi=localStorage.getItem('bmi');
    if(bmi>18.5 && bmi<=25)
    window.location.href="normal_risk.html";
    else if(bmi>25)
    window.location.href="overweight_risk.html";
    else
    window.location.href="weak_risk.html";
}
   function vaccine()
   {
    window.location.href="vaccine.html";
   }
   function preg()
   {
    window.location.href="pregnancy.html";
   }
   function physical()
   {
    window.location.href="physical.html";
   }