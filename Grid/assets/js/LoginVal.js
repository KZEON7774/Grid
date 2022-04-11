function cambiar_login(){
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
    
    setTimeout(function(){
        document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
        setTimeout(function(){    
            document.querySelector('.cont_form_sign_up').style.display = "none";
        },200);  
    }

function cambiar_sign_up(at){
        document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
        document.querySelector('.cont_form_sign_up').style.display = "block";
        document.querySelector('.cont_form_login').style.opacity = "0";
        setTimeout(function(){  
            document.querySelector('.cont_form_sign_up').style.opacity = "1";
        },100);  
        
        setTimeout(function(){   
            document.querySelector('.cont_form_login').style.display = "none";
    },400);
}    

function ocultar_login_sign_up(){
    document.querySelector('.cont_forms').className = "cont_forms";  
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
    document.querySelector('.cont_form_login').style.opacity = "0"; 
    
    setTimeout(function(){
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
    },500);  
}
    
    var username1 = "";
    var password1 = "";
    
    function formvalidation(thisform2){
    with(thisform2){
        if(usernameValidation1(usname) == false){
            return false;
        }
        if(passwordValidation1(psword) == false){
            return false;
        }
    }
    }
    
    function usernameValidation1(usname){
        with(document.form2){
            if(usname.value == ""){
                alert("Username is not entered");
                usname.focus();
                return false;
            }
            else{
                    var len = usname.value.length;
                    var i = 0;
                    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
                    while (i<len){
                        if (str.indexOf(usname.value.substr(i,1)) == -1){
                            alert ("Name may consist of Alphabet Strings. /n Duke Rinzler");
                            usname.value = "";
                            return false;
                        }
                        i++;
                    }
                    return true;
                }
            }
        }
    
    function passwordValidation1(psword){
        with(document.form2){
            if(psword.value == ""){
                alert("Password is not entered");
                psword.focus();
                return false;
            }
            else{
                password1=(psword.value).length;
                if((password1 < 8) || (password1 > 10)){
                    alert("Password should have atleast 8 character length and maximum of 10 characters.");
                    psword.focus();
                    return false;
                }
                else{
                        password1=(pword.value).length;
                        if((conpassword < 8) || (password > 10)){
                            alert("Password should have atleast 8 character length and maximum of 10 characters.");
                            pword.focus();
                            return false;
                        }
                        else{
                            var len = pword.value.length;
                            var i = 0;
                            var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,1234567890#/-@£$%^&*()!;:><?#~+_-=][}{";
                            while (i < len){
                                if (str.indexOf(pword.value.substr(i,1)) == -1){
                                    alert ("Invalid Password.");
                                    pword.value = "";
                                    return false;
                                }
                                i++;
                            }
                        }
                    }
                    return true;
                }
            }
        }
    
    var username = "";
    var password = "";
    var conpassword = "";
    var email = "";
    
    function formvalidation(thisform){
        with(thisform){
            if(usernameValidation(uname) == false){
            return false;
            }
            if(emailValidation(email) == false){
                return false;
            }
            if(passwordValidation(pword) == false){
                return false;
            }
            if(conpasswordValidation(conpword) == false){
                return false;
            }
        }
    }
    
    function usernameValidation(uname){
        with(document.form1){
            if(uname.value == ""){
                alert("Username is not Entered.");
                uname.focus();
                return false;
            }
            else{
                    var len = uname.value.length;
                    var i = 0;
                    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
                    while (i<len){
                        if (str.indexOf(uname.value.substr(i,1)) == -1){
                            alert ("Name may consist of Alphabet Strings. \n Example: 'Duke Rinzler'");
                            uname.value = "";
                            return false;
                        }
                        i++;
                    }
                    return true;
                }
            }
        }
    
    function emailValidation(email){
        with(document.form1){
            if(email.value == ""){
                alert("Email is not Entered.");
                email.focus();
                return false;
            }
            else{
                var x, y, z, a, b;
                y = 0;
                z = 0;
                a = 0;
                b = 0;
                for(x = 0 ; x < email.value.length ; x++){
                    if(email.value.charAt(x) == '@'){
                        y++;
                    }
                    if(email.value.charAt(x) == '.'){
                        z++;
                    }
                    if(email.value.charAt(x) == ','){
                        a++;
                    }
                    if(email.value.charAt(x) == ' '){
                        b++;
                    }
                }
                if((y < 1) || (z > 2) || (z < 1) || (a > 0) || (b > 0)){
                    alert("Please verify your email '" +email.value+ "' is not valid \n 'Sample@xxxx.com' \n 'Sample@xx.xxxx.lk' ");
                    email.value = "";
                    return false;
                }
                var n = email.value.substr(0,1);
                console.log(n);
                var i = 0;
                var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                if(!str.includes(n)){
                    alert(`Email should start with alphabetic letter. ${n} is not an alphabetic letter`);
                    return false;
                }
            }
            return true;
        }
    }
        
    function passwordValidation(pword){
        with(document.form1){
            if(pword.value == ""){
                alert("Password is not entered.");
                pword.focus();
                return false;
            }
            else{
                password=(pword.value).length;
                if((password < 8) || (password > 10)){
                    alert("Password should have atleast 8 character length and maximum of 10 characters.");
                    pword.focus();
                    return false;
                    }
                    else{
                    var len = pword.value.length;
                    var i = 0;
                    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,1234567890#/-@£$%^&*()!;:><?#~+_-=][}{";
                    while (i < len){
                        if (str.indexOf(pword.value.substr(i,1)) == -1){
                            alert ("Invalid Password.");
                            pword.value = "";
                            return false;
                        }
                        i++;
                    }
                }
                return true;
            }
        }
    }
 
        
    function conpasswordValidation(conpword){
            with(document.form1){
                if(conpword.value == ""){
                    alert("Please confirm the password.");
                    conpword.focus();
                    return false;
                }
                else{  
                    if(conpword.value != pword.value){
                        alert("Incorrect Password.");
                        conpword.focus();
                        return false;
                    }
                    else{
                        conpassword=(conpword.value).length;
                        if((conpassword < 8) || (conpassword > 10)){
                            alert("Password should have atleast 8 character length and maximum of 10 characters.");
                            conpword.focus();
                            return false;
                        }
                        else{
                            var len = conpword.value.length;
                            var i = 0;
                            var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,1234567890#/-@£$%^&*()!;:><?#~+_-=][}{";
                            while (i < len){
                                if (str.indexOf(conpword.value.substr(i,1)) == -1){
                                    alert ("Invalid Password.");
                                    conpword.value = "";
                                    return false;
                                }
                                i++;
                            }
                        }
                    }
                    return true;
                }
            }
        }