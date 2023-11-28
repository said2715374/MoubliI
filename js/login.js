document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitButton');
  const loginForm = document.getElementById('loginForm');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();


    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;


    if (username === '' || password === '') {
      alert('Veuillez saisir votre nom dutilisateur et votre mot de passe');
    } else if (!passwordRegex.test(password)) {
      alert('Le mot de passe doit contenir au moins 8 caractères, dont des majuscules, des minuscules, des chiffres et des symboles.');
    } else {

      loginForm.submit();
      window.location.href = 'index.html';
    }
  });
});
