

var one="";
function onef(){
  one+=1;
  document.getElementById("1").innerHTML=one;
  
}
function twof(){
  one+=2;
  document.getElementById("1").innerHTML=one;
}
function threef(){
  one+=3;
  document.getElementById("1").innerHTML=one;
  
}
function fourf(){
  one+=4;
  document.getElementById("1").innerHTML=one;
  
}

function fivef(){
  one+=5;
  document.getElementById("1").innerHTML=one;
  
}
function sixf(){
  one+=6;
  document.getElementById("1").innerHTML=one;

}
function sevenf(){
  one+=7;
  document.getElementById("1").innerHTML=one;

}
function eigthf(){
  one+=8;
  document.getElementById("1").innerHTML=one;
  
}
function ninef(){
  one+=9;
  document.getElementById("1").innerHTML=one;
}
function decimalf(){
  one=one+"."
  document.getElementById("1").innerHTML=one;
  
}
function zerof(){
  one=one+0;
  document.getElementById("1").innerHTML=one;
  
}

var op;
var one1
function multiplyf(){
  op="*";
  one1=one;
  one=""
  document.getElementById("1").innerHTML=op;
  
}
function dividef(){
  op="/";
  one1=one;
  one=""
  document.getElementById("1").innerHTML=op;
  
}
function plusf(){
  op="+"
  one1=one;
  one="";
  document.getElementById("1").innerHTML=op;
}
function minusf(){
  op="-";
  one1=one;
  one=""
  document.getElementById("1").innerHTML=op;
}

function eqf(){
  var on1=Number(one1);
  on=Number(one);
  if(op==="*"){
    document.getElementById("1").innerHTML=on1*on
    one=(on1*on).toString();
  
  }
  if(op==="/"){
    document.getElementById("1").innerHTML=on1/on
    one=(on1/on).toString();
  }
  if(op==="+"){
    document.getElementById("1").innerHTML=on1+on
    one=(on1+on).toString();
  }
  if(op==="-"){
    document.getElementById("1").innerHTML=on1-on
    one=(on1-on).toString();
  }
  
}
function cl(){
  one1="";
  one="";
  document.getElementById("1").innerHTML=0;
}
function removef(){
  one = one.slice(0, -1); 
  document.getElementById("1").innerHTML=one;
}
