const loginForm = document.getElementById("login-form");
const loginButton=document.getElementById("button")
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault(); 
      const username = loginForm.username.value;
    const password = loginForm.password.value;
               
    if (username === "user" && password === "hashini") {     
         window.location.href="weth_app.html";
               
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
