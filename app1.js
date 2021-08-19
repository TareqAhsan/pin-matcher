function getPin() {
    const value = Math.round(Math.random()*10000);
    const valString = value + '';
    if (valString.length == 4) {
        return value;
    }else{
     return getPin();   
    }
}

document.getElementById('generate').addEventListener('click',()=>{
 const res = getPin();
 const input = document.getElementById('pin-val').value = res;
    
})

document.getElementById('keypad').addEventListener('click',function(event){
     const num = event.target.innerText;
     const input = document.getElementById('cal-input');
     if (isNaN(num)) {
        if (num == 'C') {
          input.value = '';   
        }
     }else{
      
         const inputVal = input.value;
         const total = inputVal + num;
         input.value = total;
     }
})

document.getElementById('sub').addEventListener('click',function(){
    const input1 = document.getElementById('pin-val');
    const input2 = document.getElementById('cal-input');
    const success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');
    if (input1.value==input2.value) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }else{
        success.style.display = 'none';
        fail.style.display = 'block';
    }
})
