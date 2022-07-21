let dashEl = document.querySelector('.dashboard')
let plusSignEl = document.querySelector('.plus')
let minusSignEl = document.querySelector('.minus')
let inputEl = document.querySelector('.input')

let dash = 0;
let inputNum = 0;




dashEl.innerHTML = dash;


plusSignEl.addEventListener('click', function() { 
   inputNum = parseInt(inputEl.value)
   if(!inputEl.value) return;
   dash = dash + inputNum;
   if (dash >= 0) {
    dashEl.style.color = "black";
}
   dashEl.innerHTML = dash
})


minusSignEl.addEventListener('click', function() {
    inputNum = parseInt(inputEl.value)
    if(!inputEl.value) return;
    dash = dash - inputNum;
    
    if (dash < 0) {
        dashEl.style.color = "red";
   }
    dashEl.innerHTML = dash
     
 })
 
 

 






