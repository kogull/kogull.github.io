document.getElementById("myForm").addEventListener("submit", function (event) {
	event.preventDefault(); 
  
	// Display confirmation message
	document.getElementById("confirmation-message").style.display = "block";
  
	// Clear form fields
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("message").value = "";
  });
  