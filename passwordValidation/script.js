function checkPassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    console.log(password,confirmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == confirmPassword){
            message.textContent = "Password Match";
            message.style.backgroundColor = "#3ae374";
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
    alert("can't be empty!");
    message.textContent = "";
}
}