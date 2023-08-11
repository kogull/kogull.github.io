document.addEventListener("DOMContentLoaded", function () {
  var myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    var name = nameInput.value;
    var email = emailInput.value;
    var subject = subjectInput.value;
    var message = messageInput.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";

    // Redirect to the home page
    window.location.href = "index.html";
  });
});
