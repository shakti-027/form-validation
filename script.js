function validate() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confpassword = document.getElementById("confirm-password").value;
  const err = document.getElementById("err");

  const trimname = fullname.trim();
  const trimpassword = password.trim();

  // pattern for fullname and mail and contact number
  const fullnameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const contactRegex = /^[6-9][0-9]{9}$/;              //it will amke sure contact number will start from 6.


  // all block will be filled
  if (!fullname || !email || !phone || !password || !confpassword) {
    err.innerHTML = "*All fields should be filled";
    return false;
  } 
  else {
    err.innerHTML = "";
  }

  // trim used for remove all white space fron starting and ending
  if(fullname !== trimname){
    alert ('fullname cannot have leading or trailing whitespace');
    return false;
  }

  //Validate username format
  if (!fullnameRegex.test(fullname)) {
    err.innerHTML += ("Fullname can only contain letters");
    return false;
  }
 
  // email validation
  if (emailRegex.test(email)) {

  }
  else{
    err.innerHTML += ("Enter a valid email address.");
    return false;
  }

  // phone no validation
  if (contactRegex.test(phone)) {

  } 
  else {
    err.innerHTML += ("Contact number is invalid"); 
    return false;
  }

  // password validation
  if (password !== trimpassword) {
    alert ('Password cannot have leading or trailing whitespace');
    return false;
  }
  // atleast contain 6 character in password
  if (password.length < 6) {
    err.innerHTML += ("Password should be contain atleast 6 character");
    return false;
  }

  if (password !== confpassword) {
    err.innerHTML += "Passwords do not match, enter correct password!";
    return false;
  }
  // alert("form submitted successfully");
  return true;
}
