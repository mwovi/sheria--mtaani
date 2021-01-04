/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById("sign-up"),
    choose = document.getElementById("choose"),
    signIn = document.getElementById("sign-in"),
    loginIn = document.getElementById("login-in"),
    chooseIn = document.getElementById("Choose-in"),
    loginUp = document.getElementById("login-up"),
    loginUp2 = document.getElementById("login-up2"),
    client = document.getElementById("client-sign"),
    lawyer = document.getElementById("lawyer-sign")
 




signUp.addEventListener("click", () => {
  // Remove classes first if they exist
  loginIn.classList.remove("block");
  chooseIn.classList.remove("none");

  // Add classes
  loginIn.classList.toggle("none");

  chooseIn.classList.toggle("block");
});

signIn.addEventListener("click", () => {
  // Remove classes first if they exist
  loginIn.classList.remove("none");

  chooseIn.classList.remove("block");

  // Add classes
  loginIn.classList.toggle("block");

  chooseIn.classList.toggle("none");
});


client.addEventListener("click", () => {
    //remove classes first if existing
loginIn.classList.remove("block");
chooseIn.classList.remove("block");
loginUp.classList.remove("none");



})

lawyer.addEventListener("click", () => {
    //remove classes first if existing
loginIn.classList.remove("block");
chooseIn.classList.remove("block");
loginUp2.classList.remove("none");



})
