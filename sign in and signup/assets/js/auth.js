//signup
const signupForm = document.querySelector('#login-up');
signupForm.addEventListener('submit', (e) => {
   e.preventDefault();

   //get user info
   const email = signupForm['signup-email'].value;
   const password = signupForm['signup-password'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        
        signupForm.reset();
    });


});

//signup2
const signupForm1 = document.querySelector('#login-up2');
signupForm1.addEventListener('submit', (e) => {
   e.preventDefault();

   //get user info
   const email = signupForm1['signup-email'].value;
   const password = signupForm['signup-password'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        
        signupForm1.reset();
    })


})

//logout

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    })
});