const email=document.getElementById("email");
const emailError=document.getElementById("emailError");
const password=document.getElementById("password");
const passwordError=document.getElementById("passwordError");
const successMessage=document.getElementById("successMessage");
function checkEmail(){
    let emailValue=email.value;
 if (emailValue.length<=3){
        emailError.innerText="Email must be more than 3 characters";
        successMessage.innerText="";
        return;
    }
    if(!emailValue.includes("@") || !emailValue.includes(".")){

        emailError.innerText="Email must contain @ and .";
        successMessage.innerText="";
        return;
    }
    emailError.innerText=""; 
}
function checkPassword(){
    let passwordValue=password.value;
    if (passwordValue.length<=8){
        passwordError.innerText="Password must be more than 8 characters";
        successMessage.innerText="";
        return;
    }
    passwordError.innerText="";
}
function checkAllGood(){
    let emailValue=email.value;
    let passwordValue=password.value;
    let validEmail=emailValue.length>3 && emailValue.includes("@") && emailValue.includes(".");
    let validPassword=passwordValue.length > 8;
    if (validEmail && validPassword){
        successMessage.innerText = "All good to go!";
    } 
    else{
        successMessage.innerText = "";
    }
}
const form = document.getElementById("signupForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let emailValue=email.value;
    let passwordValue=password.value;
    let validEmail =emailValue.length>3 && emailValue.includes("@") && emailValue.includes(".");
    let validPassword=passwordValue.length>8;
    if(!validEmail || !validPassword){
        alert("Please enter valid email and password");
        return;
    }
    let confirmation=confirm("Are you sure you want to sign up?");
    if (confirmation){
        alert("Successful Signup!");
    }
    else{
        email.value="";
        password.value="";
        emailError.innerText="";
        passwordError.innerText="";
        successMessage.innerText="";
        window.location.href=window.location.href;
    }
});