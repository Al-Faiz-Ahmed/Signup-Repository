var username = document.getElementById("username");
var usernameError = document.getElementById("username-error");
var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var pass = document.getElementById("password");
var passwordError = document.getElementById("password-error");
var c_pass = document.getElementById("cpassword");
var CpasswordError = document.getElementById("Cpassword-error");

function checkusername() {
  if (username.value == "") {
    usernameError.innerHTML = "Please write username";
  } else if (username.value.length < 5) {
    usernameError.innerHTML = "Write a 5 letter Username";
  } else if (username.value !== "" && typeof username.value == "string") {
    usernameError.innerHTML = "";
    return true;
  }
}
function checkemail() {
  if (email.value == "") {
    emailError.innerHTML = "Please write Your email";
  }
  let findat = email.value.indexOf("@");
  let emailvalue = email.value;
  if (email.value != "" && findat == -1) {
    emailError.innerHTML = "Please write accurate email";
  }
  if (findat != -1 && typeof emailvalue == "string") {
    emailError.innerHTML = "";
    return true;
  }
}

function checkPas() {
  if (pass.value == "") {
    passwordError.innerHTML = "Please write password";
}else if(pass.value.length < 6){
      passwordError.innerHTML = "Please write a strong password";
  }
  else if (typeof pass.value == "string" && pass.value.length > 5) {
    passwordError.innerHTML = "";
    return true;
  }
}
function confirmpass() {
  if (pass.value == "") {
    CpasswordError.innerHTML = "";
  } else if (pass.value.length >= 6 && c_pass.value == "") {
    CpasswordError.innerHTML = "Confirm your password";
  } else if (pass.value.length < 6) {
    CpasswordError.innerHTML = "";
  } else if (c_pass.value !== pass.value && pass.value.length >= 6) {
    CpasswordError.innerHTML = "Password not matched";
  } else if (c_pass.value == pass.value) {
    return true;
  }
}

function retiction() {
  let a = checkusername();
  let b = checkemail();
  let c = checkPas();
  let d = confirmpass();
  console.log(a, b, c, d);
  if (a == true && b == true && c == true && d == true) {
    window.location = "index.html";
  }
}
