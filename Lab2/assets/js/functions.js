function c(val){
  document.getElementById("display").value = val;
}

function math(val){
  document.getElementById("display").value += val;
}

function e(){
  try{
    c(eval(document.getElementById("display").value))
  }
  catch(e){
    c('error')
  }
}

function sqrt(){
  var res;
  res = Math.sqrt(document.getElementById("display").value);
  document.getElementById("display").value = res;
}

function percent(){
  var res;
  res = eval(document.getElementById("display").value) / 100;
  document.getElementById("display").value = res;
}


