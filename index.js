let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let passWord = document.getElementById("password");
let signUpBtn = document.getElementById("signUp");
let signUpData = JSON.parse(localStorage.getItem("users")) || [];
let signDiv = document.querySelector(".signbtn")
let welcomeBox = document.getElementById("welcomeBox")
let eyeIcon = document.getElementById("eyeIcon")


signUpBtn.onclick = function() {
    if ( fullName.value.length === 0 || email.value.length === 0 || passWord.value.length === 0 ) {
        swal("Watch Out!", "Please Fill In All Required Fields!", "error");
    } else {
        signDiv.innerHTML = `
            <a href="index.html">
                <button class="formButton" id="signUp" >Sign Up</button>
            </a>
        `
        signUpData.push({ fullName: fullName.value, email: email.value, password: passWord.value });
        localStorage.setItem("users", JSON.stringify(signUpData));
        fullName.value = "";
        email.value = "";
        passWord.value = "";
    }
}

eyeIcon.addEventListener("click" , function(){

    if (eyeIcon.classList.contains("fa-eye-slash")) {
        eyeIcon.classList.replace("fa-eye-slash" , "fa-eye")
        passWord.type= "text"
    } else {
        eyeIcon.classList.replace("fa-eye" , "fa-eye-slash")
        passWord.type= "password"
    }

})
