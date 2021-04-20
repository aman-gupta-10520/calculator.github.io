var dislimit=0
var one="";
function text(){
    document.getElementById("1").style.fontSize='7.3vw';
    document.getElementById("1").innerHTML=one;
}
function onef(){
  if(dislimit==12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=1;
  document.getElementById("1").innerHTML=one;

}
function twof(){
    if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=2;
  document.getElementById("1").innerHTML=one;
}
function threef(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=3;
  document.getElementById("1").innerHTML=one;

}
function fourf(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=4;
  document.getElementById("1").innerHTML=one;

}

function fivef(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=5;
  document.getElementById("1").innerHTML=one;

}
function sixf(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=6;
  document.getElementById("1").innerHTML=one;

}
function sevenf(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=7;
  document.getElementById("1").innerHTML=one;

}
function eigthf(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=8;
  document.getElementById("1").innerHTML=one;

}
function ninef(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one+=9;
  document.getElementById("1").innerHTML=one;
}
function decimalf(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one=one+"."
  document.getElementById("1").innerHTML=one;

}
function zerof(){
  if(dislimit===12){
    document.getElementById("1").style.fontSize="7.3vw";
    document.getElementById("1").innerHTML="max-limit";
    window.setTimeout(text,500);
    return
  }
  dislimit+=1;
  one=one+0;
  document.getElementById("1").innerHTML=one;

}

var op;
var one1
function multiplyf(){
  dislimit=0;
  op="*";
  one1=one;
  one=""
  document.getElementById("1").innerHTML=op;

}
function dividef(){
  dislimit=0;
  op="/";
  one1=one;
  one=""
  document.getElementById("1").innerHTML=op;

}
function plusf(){
  dislimit=0;
  op="+"
  one1=one;
  one="";
  document.getElementById("1").innerHTML=op;
}
function minusf(){
  dislimit=0;
  op="-";
  one1=one;
  one=""
  document.getElementById("1").innerHTML=op;
}

function eqf(){
  dislimit=0;
  var on1=Number(one1);
  on=Number(one);
  if(op==="*"){
    if(((on1*on).toString()).length>13){
      document.getElementById("1").style.fontSize="7.3vw";
      document.getElementById("1").innerHTML="max-limit";
      window.setTimeout(text,500);
      return
    }
    document.getElementById("1").innerHTML=on1*on
    one=(on1*on).toString();

  }
  if(op==="/"){
    var p=(on1/on).toFixed(4)
    var st=p.toString()
    p=st.slice(0,13)
    document.getElementById("1").innerHTML=p
    one=p.toString();
  }
  if(op==="+"){
    if(((on1+on).toString()).length>12){
      document.getElementById("1").style.fontSize="7.3vw";
      document.getElementById("1").innerHTML="max-limit";
      window.setTimeout(text,500);
      return
    }
    document.getElementById("1").innerHTML=on1+on
    one=(on1+on).toString();
  }
  if(op==="-"){
    if(((on1*on).toString()).length>12){
      document.getElementById("1").style.fontSize="7.3vw";
      document.getElementById("1").innerHTML="max-limit";
      window.setTimeout(text,500);
      return
    }
    document.getElementById("1").innerHTML=on1-on
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
  dislimit-=1
  one = one.slice(0, -1);
  document.getElementById("1").innerHTML=one;
}


/*binary js*/
var a="";
var show="";
var op1=0;
var op2=0;
var op="";
function my(val){
    a+=val;
    show+=val;
    document.getElementById("res").innerHTML=show
}
function add(){
    op="+"
    op1=parseInt(a,2);
    show+="+"
    document.getElementById("res").innerHTML=show;
    a="";
}
function sub(){
    op="-"
    op1=parseInt(a,2);
    show+="-"
    document.getElementById("res").innerHTML=show;
    a="";
}
function mul(){
    op="*"
    op1=parseInt(a,2);
    show+="*"
    document.getElementById("res").innerHTML=show;
    a="";
}
function div(){
    op="/"
    op1=parseInt(a,2);
    show+="/"
    document.getElementById("res").innerHTML=show;
    a="";
}
function equal(){
    var ans=0;
    op2=parseInt(a,2);
    if(op==="+"){
        ans=op1+op2;
        document.getElementById("res").innerHTML=ans.toString(2);
    }
    else if(op==="-"){
        ans=op1-op2;
        document.getElementById("res").innerHTML=ans.toString(2);
    }
    else if(op==="*"){
        ans=op1*op2;
        document.getElementById("res").innerHTML=ans.toString(2);
    }
    else if(op==="/"){
        ans=Math.floor(op1/op2);
        document.getElementById("res").innerHTML=ans.toString(2);
    }
}
function clea(){
    document.getElementById("res").innerHTML="";
    a="";
    show='';
}
function chng(){
  document.getElementById("binary").style.display='block';
  document.getElementById("wr").style.display='none';
}
function deci(){
  document.getElementById("binary").style.display='none';
  document.getElementById("wr").style.display='block';
}
