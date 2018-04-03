document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach( function(buttons) {
        buttons.addEventListener("click", counter, false);
    function counter() {
        calc.input.value += buttons.value;
        calc.input.value = eval(calc.input.value);
    }
      });
 });
