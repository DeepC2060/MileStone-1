function validatePassword(event) {
    event.preventDefault(); // Prevent form submission

    let password = document.getElementById("password").value;
    let confirmedPassword = document.getElementById("confirm-password").value;

    if (password === confirmedPassword) {
        console.log("Password Matched. Password validation Successful.");
        alert("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
        alert("Password didn't match. Password validation unsuccessful.");
    }
}