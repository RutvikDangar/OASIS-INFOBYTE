function display(value) {
    if(validateNumber(value)){
      document.getElementById("result").value += value;
    }
  }
  
  function validateNumber(e) {
    let array = ['+','-','*','/']
    array.forEach(a=>{
      if(e==a) document.getElementById("result").value += e; return
    })
    const pattern = /^[0-9]$/;
    return pattern.test(e)
}
  function calculate() {
    var expression = document.getElementById("result").value;
    if(expression){
      var result = eval(expression);
      document.getElementById("result").value = result;
    }
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function backspace() {
    var value = document.getElementById("result").value;
    value = value.substring(0, value.length - 1);
    document.getElementById("result").value = value;
  }

  
  document.body.addEventListener('keypress',(e)=>{
    display(e.key)
  })
  document.body.addEventListener('keydown',(e)=>{
    if(e.key==='Backspace') backspace()
    else if(e.keyCode===187) calculate()
  })

