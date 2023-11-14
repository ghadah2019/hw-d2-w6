let signupForm = document.getElementById('signup-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();


  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';


  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();


  if (name.length <= 5) {
    nameError.textContent = 'Name must be more than 5 letters';
    return;
  }


  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email address';
    return;
  }


  if (password.length <= 8) {
    passwordError.textContent = 'Password must be more than 8 characters';
    return;
  }




  fetch('https://655243865c69a7790329cbfe.mockapi.io/user/user', {
    method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
      if (response.ok) {
      
        alert('Sign up successful!');
        signupForm.reset();
        window.location.href = 'index2.html';
      } else {
     
        throw new Error('Failed to sign up');
      }
    })
    .catch(error => {
   
      console.error(error);
      alert('Sign up failed. Please try again later.');
    });
});


// fetch("https://64ec45a2f9b2b70f2bfa0612.mockapi.io/todo", {
//     method: 'POST',
//     body: JSON.stringify({
//         task
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => {
//         let text = document.getElementById("task")
//         text.innerText = task
//     });