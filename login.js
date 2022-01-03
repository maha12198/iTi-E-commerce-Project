
//pass-submit form values, and call this fun. when submit button is clicked
function myFunction() 
{
  document.getElementById("frm1").submit();
}

//allow only letters in the textbox
// call this function in the (onkeypress) event of the textbox
//e-event , t-this
function allowOnlyLetters(e, t)   
{    
    
    if (window.event)    
        {    
            var charCode = window.event.keyCode;    
        }    
    else if (e)   
        {    
            var charCode = e.which;    
        }    
    else 
        {
            return true; 
        }


    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))    
            return true;    
    else  
        {    
            alert("Please enter only alphabets");    
            return false;    
        }           
}      
