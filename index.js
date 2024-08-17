let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let passWord = document.getElementById("password");
let signUpBtn = document.getElementById("signUp");
let signUpData = JSON.parse(localStorage.getItem("users")) || [];
let signDiv = document.querySelector(".signbtn")
let welcomeBox = document.getElementById("welcomeBox")


signUpBtn.onclick = function() {
    if ( fullName.value.length === 0 || email.value.length === 0 || passWord.value.length === 0 ) {
        alert("Please Fill In All Required Fields");
    } else {
        alert(
            `Welcome ${fullName.value}
            Please Login to access your account <3
            `
        )
        signDiv.innerHTML = `
            <a href="index.html">
                <button class="formButton" id="signUp" >Sign Up</button>
            </a>
        `
        signUpData.push({ fullName: fullName.value, email: email.value, password: passWord.value });
        localStorage.setItem("users", JSON.stringify(signUpData));
        console.log(signUpData);
        fullName.value = "";
        email.value = "";
        passWord.value = "";
    }
}
