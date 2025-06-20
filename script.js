function cal(){
    var mname=document.getElementById("mname").value;
    var fname=document.getElementById("fname").value;
    var par=document.getElementById("res");
    var res=Math.floor(Math.random()*100);
    if(res>50){
        
    }
    par.innerHTML="The friendsip between "+mname+" and "+fname+" is "+res.toFixed(2)+"%";
}