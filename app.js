// function getPin() {
//     const pin = Math.round(Math.random()*10000);
//     const pinString = pin + '';
//     if (pinString.length==4) {
      
//         return pin;
//     }else{
//         // console.log('please again press');
//         return getPin();
//     }
// }

// document.getElementById('generate').addEventListener('click',function () {
    
//     const val =  getPin();
//     document.getElementById('pin-val').value = val;
// })

// document.getElementById('keypad').addEventListener('click',function (event) {
//     const num = event.target.innerText;
//     const calInput = document.getElementById('cal-input');
//     if (isNaN(num)) {
//         if(num =='C')
//         calInput.value ='';
//     }else{
//         const preVal = calInput.value;
//         const newNum = preVal + num;
//         calInput.value = newNum;
//     }
  
// })
