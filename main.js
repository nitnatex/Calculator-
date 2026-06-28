let display =document.getElementById('disp')
function appendValue(val) {
  if (val==='0'&& val==='00' && val!=='.') {
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
        if (display.value!='') {
              display.value=eval(display.value)  
        }
        else {
                display.value=''
        }

}