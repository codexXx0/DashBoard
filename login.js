let emailField = document.getElementById("email_field")
let passwordField = document.getElementById("password_field")
let signInBtn = document.getElementById("signInBtn")
let loginDiv = document.getElementById("login")
let eyeIcon = document.getElementById("eyeIcon")

signInBtn.onclick = (e) => {
    e.preventDefault(); // Prevents form submission
    
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = storedUsers.find(user => user.email === emailField.value && user.password === passwordField.value);
    
    if (!emailField.value || !passwordField.value) {
        swal("Watch Out!", "Please Fill In All Required Fields!", "error");
    } else if (foundUser) {
        swal("Welcome Back <3").then(() => {
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect after delay
            }, 100);  // 2-second delay
        });
    } else {
        swal("Incorrect email or password!" , "Error");
    }
};

eyeIcon.addEventListener("click" , function(){

    if (eyeIcon.classList.contains("fa-eye-slash")) {
        eyeIcon.classList.replace("fa-eye-slash" , "fa-eye")
        passwordField.type= "text"
    } else {
        eyeIcon.classList.replace("fa-eye" , "fa-eye-slash")
        passwordField.type= "password"
    }

})

