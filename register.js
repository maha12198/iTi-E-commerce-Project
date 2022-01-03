
        //allow only letters in the textbox
        // call this function in the (onkeypress) event of the textbox
        //e-event , t-this
        function allowOnlyLetters(e, t)   
        {    
            
            if (window.event)    
                {    
                    var charCode = event.keyCode;    
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


        //------------------ Validate User Name and Pass -----------------
        function validateForm()
        { 
        //collect form data in JavaScript variables  
        var pw1 = document.getElementById("txtPass1").value;  
        var pw2 = document.getElementById("txtPass2").value; 
        
        var a1 = document.getElementById("txtUser").value;  

        if(a1.length < 3)
        {
            event.preventDefault();
            alert('Invalid Name, name must be more than 3 letters')
            //document.getElementById("txtUser").focus();
            //check
            //this.setSelectionRange(0, this.value.length)
            //return;
            
            //txtUser.value=" ";
            //returnToPreviousPage();
            return false; 
        }


        //check empty password field  
        if(pw1 == "") {  
        document.getElementById("message1").innerHTML = "**Fill the password please!";  
        return false;  
        }  
        
        //check empty confirm password field  
        if(pw2 == "") {  
        document.getElementById("message2").innerHTML = "**Enter the password please!";  
        return false;  
        }   
        
        //minimum password length validation  
        if(pw1.length < 8) {  
        document.getElementById("message1").innerHTML = "**Password length must be at least 8 characters";  
        return false;  
        }  
    
        //maximum length of password validation  
        if(pw1.length > 15) {  
        document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
        return false;  
        }  
        
        if(pw1 != pw2) {  
        document.getElementById("message2").innerHTML = "**Passwords are not same";  
        return false;  
        } else { 
        document.getElementById("message1").innerHTML = ""; 
        //alert ("Your password created successfully");  
          
        }  
        }

        function validatePass() 
        {

            var x= document.getElementById("txtPass1");
            var y= document.getElementById("txtPass2");
            
            if(txtPass1.value == "" || txtPass2.value == "" ) 
            {  
                //document.getElementById("message2").innerHTML = "**Enter the password please!";  
                //returnToPreviousPage();
                alert("Please enter the password field");
                return;  
            }  

            else if (x.value == y.value) 
            {
                return;
            }
            else
            {
                alert("password and repeat password should be the same");
            }
        }
      

        //----- Check Email Validation ----------

        //pass the value from the HTML text input in onclick event
        function ValidateEmailAddress()
        {
            emailString = document.getElementById('txtEmail').value;

            // check if  @ sign exist and not at index 0 
            var atSymbol = emailString.indexOf("@");
            if(atSymbol < 1) return false;
            //if (atSymbol != 1)
            
            // check if the dot is after @ with at least two indexes 
            var dot = emailString.indexOf(".");
            if(dot <= atSymbol + 2) return false;
            
            // check that the dot is not at the end of the email/string
            if (dot === emailString.length - 1) return false;
            
            return true;
        }

        function CheckEmail()
        {
            emailString = document.getElementById('txtEmail').value;
            //get result as true/false
            var Result= ValidateEmailAddress(emailString);
                
                if(Result)
                {
                    //document.getElementById("output").innerHTML="Valid Email Id";
                    alert("Valid Email")
                }
                else
                {
                    //document.getElementById("output").innerHTML="NOT a Valid Email Id";
                    alert("Not a Valid Email")
                }
        }


        //a function to check if all form data is valid before submitting
        function submit_form() 
        {
            //return the value of validateForm() function and store it in a variable
            var a = validateForm();
            if (a) {

                //if the return value is true >> submit form 
                document.forms['frm1'].submit();
            }
            else {
                
                //if return value is false, the from will not be submitted
                //instead of use event.preventDefault()
                returnToPreviousPage();
            }
        }