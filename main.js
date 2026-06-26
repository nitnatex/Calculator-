let display =document.getElementById('disp')
function appendValue(val) {
  if (val==='0'&&val!=='.') {
       display.value=val   
  }
  else {
          display.value+=val
  }
}
function clearDisplay() {
display.value=''
}
function calculate() {
        display.value=eval(display.value)
}