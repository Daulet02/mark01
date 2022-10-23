"use strict";

// let const
// null Infinity NaN  number string undefined symbol object
// alert()prompt()confirm()typeof()String()Number()
// = == === <= >= > < + - * / != !== || && ?? ! !! 
// if else else if   (условие) ? значение1 : значение2;
//while(){}   do{..}while()   for(;;){}
// break continue
// function()

function ask(question, yes, no) {
    if (confirm(question))
        alert("")
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

