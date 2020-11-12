var dislimit=0;
var one="";
function text(){
    document.getElementById("1").style.fontSize='50px';
    document.getElementById("1").innerHTML=one;
}
function onef(){
  if(dislimit==11){
    document.getElementById("1").style.fontSize="40px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=1;
  document.getElementById("1").innerHTML=one;
  
}
function twof(){
    if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=2;
  document.getElementById("1").innerHTML=one;
}
function threef(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=3;
  document.getElementById("1").innerHTML=one;
  
}
function fourf(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=4;
  document.getElementById("1").innerHTML=one;
  
}

function fivef(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=5;
  document.getElementById("1").innerHTML=one;
  
}
function sixf(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=6;
  document.getElementById("1").innerHTML=one;

}
function sevenf(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=7;
  document.getElementById("1").innerHTML=one;

}
function eigthf(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=8;
  document.getElementById("1").innerHTML=one;
  
}
function ninef(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one+=9;
  document.getElementById("1").innerHTML=one;
}
function decimalf(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one=one+".";
  document.getElementById("1").innerHTML=one;
  
}
function zerof(){
  if(dislimit===11){
    document.getElementById("1").style.fontSize="30px";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return;
  }
  dislimit+=1;
  one=one+0;
  document.getElementById("1").innerHTML=one;
  
}

var op;
var one1;
function multiplyf(){
  dislimit=0;
  op="*";
  one1=one;
  one="";
  document.getElementById("1").innerHTML=op;
  
}
function dividef(){
  dislimit=0;
  op="/";
  one1=one;
  one="";
  document.getElementById("1").innerHTML=op;
  
}
function plusf(){
  dislimit=0;
  op="+";
  one1=one;
  one="";
  document.getElementById("1").innerHTML=op;
}
function minusf(){
  dislimit=0;
  op="-";
  one1=one;
  one="";
  document.getElementById("1").innerHTML=op;
}

function eqf(){
  dislimit=0;
  var on1=Number(one1);
  on=Number(one);
  if(op==="*"){
    document.getElementById("1").innerHTML=on1*on;
    one=(on1*on).toString();
  
  }
  if(op==="/"){
    var p=(on1/on).toFixed(4);
    var st=p.toString();
    p=st.slice(0,11);
    document.getElementById("1").innerHTML=p;
    one=p.toString();
  }
  if(op==="+"){
    document.getElementById("1").innerHTML=on1+on;
    one=(on1+on).toString();
  }
  if(op==="-"){
    document.getElementById("1").innerHTML=on1-on;
    one=(on1-on).toString();
  }
  
}
function cl(){
  dislimit=0;
  one1="";
  one="";
  document.getElementById("1").innerHTML=0;
}
function removef(){
  dislimit-=1;
  one = one.slice(0, -1); 
  document.getElementById("1").innerHTML=one;
}

