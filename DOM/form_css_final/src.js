var firstName = document.getElementById("First_Name");
var F_nameLebalText = document.getElementById("firstNameLabel");
console.log("F_nameLebalText", F_nameLebalText)
var lastName = document.getElementById("Last_Name");
var L_nameLebalText = document.getElementById("lastNameLabel");
var email = document.getElementById("email");
var emailLebalText = document.getElementById("emailLabel");
var password = document.getElementById("password");
var passLebalText = document.getElementById("passLabel");
//First name
firstName.addEventListener("input", (e) => {
  var regName = /^[a-zA-Z]+$/;
  var userText = e.target.value;
  if (!regName.test(userText)) {
    F_nameLebalText.innerHTML = "Please enter your first name";
    F_nameLebalText.style.color = "red";
    document.getElementById("userText").focus();
    
  } else {
    F_nameLebalText.innerHTML = "Valid first name given.";
    F_nameLebalText.style.color = "blue";

    
  }
  if((userText == "First name") || (userText =="FIRST NAME") || (userText =="firstname")){
    F_nameLebalText.innerHTML = "firstname cannot be (first name)";
    F_nameLebalText.style.color = "red";
  }
});
//Last Name
lastName.addEventListener("input", (e) => {
  var regName = /^[a-zA-Z]+$/;
  var userText = e.target.value;
  if (!regName.test(userText)) {
    L_nameLebalText.innerHTML = "Please enter your last name";
    L_nameLebalText.style.color = "red";
    document.getElementById("userText").focus();
    
  } else {
    L_nameLebalText.innerHTML = "Valid last name given.";
    L_nameLebalText.style.color = "Blue";

    
  }
    if((userText == "Last name") || (userText =="LAST NAME") || (userText =="lastname")){
    L_nameLebalText.innerHTML = "Lastname cannot be (last name)";
    L_nameLebalText.style.color = "red";
  }
});
//Email
email.addEventListener("input", (e) => {
  var inputText = e.target.value;

  if (
    inputText.indexOf("@") == -1 ||
    (inputText.indexOf("gmail") == -1 &&
      inputText.indexOf("hotmail") == -1 &&
      inputText.indexOf("outlook") == -1 &&
      inputText.indexOf("aim") == -1 &&
      inputText.indexOf("yahoo") == -1 &&
      inputText.indexOf("icloud") == -1 &&
      inputText.indexOf("protonmail") == -1) ||
    inputText.indexOf(".com") == -1
  ) {
    emailLebalText.innerHTML = "Email is not valid";
    emailLebalText.style.color = "red";
  } else {
    emailLebalText.innerHTML = "Email is valid";
    emailLebalText.style.color = "green";
  }
});
//password
password.addEventListener("input", (e) => {
  var passText = e.target.value;
  if (passText.length > 20) {
    passLebalText.innerHTML = "MAKE SURE YOUR REMEMBER IT!";
    passLebalText.style.color = "brown";
  } else if (passText.length >= 15) {
    passLebalText.innerHTML = "Excellent password";
    passLebalText.style.color = "blue";
  } else if (passText.length >= 10) {
    passLebalText.innerHTML = "Very good password";
    passLebalText.style.color = "green";
  } else if (passText.length >= 5) {
    passLebalText.innerHTML = "Medium password";
    passLebalText.style.color = "orange";
  } else {
    passLebalText.innerHTML = "Poor password";
    passLebalText.style.color = "red";
  }
  if (
    passText == "password" ||
    passText == "PASSWORD" ||
    passText == "Password"
  ) {
    passLebalText.innerHTML = "Password cannot be (password)";
    passLebalText.style.color = "red";
  }
});
//Submit
form.addEventListener("submit", (e) => {
    alert("Thank you for your message ");
  });