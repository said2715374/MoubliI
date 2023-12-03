function validateForm(event) {
    event.preventDefault(); 
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var formMessagesContainer = document.getElementById("form-messages-container");
    

    formMessagesContainer.innerHTML = "";
    

    var messageDiv = document.createElement("div");
    
    
    if (name == "" || email == "" || message == "") {
      messageDiv.textContent = "Veuillez remplir tous les champs du formulaire.";
      messageDiv.classList.add("error-message"); 
      formMessagesContainer.appendChild(messageDiv);
      return false;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageDiv.textContent = "Veuillez entrer une adresse e-mail valide.";
      messageDiv.classList.add("error-message");
      formMessagesContainer.appendChild(messageDiv);
      return false;
    }
    

    messageDiv.textContent = "Le message a été envoyé avec succès!";
    messageDiv.classList.add("success-message");
    formMessagesContainer.appendChild(messageDiv);
    

    document.getElementById("contact").reset();
    return true;
  }
  
  document.getElementById("contact").addEventListener("submit", validateForm);

