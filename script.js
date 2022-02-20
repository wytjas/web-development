function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * (1+rate/100);
    var year = new Date().getFullYear()+parseInt(years);  
    
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of"+interest+",\<br\>in the year "+year+"\<br\>" 
} 

 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 

function checkdata()
{
    if(principal.value <=0){
        alert("Please enter a positive number");
        return false;
    } else {
        alert("Your input is valid!");
        return true;     
    }   
}       
