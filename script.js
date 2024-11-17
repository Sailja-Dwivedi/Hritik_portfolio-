window.onload = function() {
    document.getElementById("chatModal").style.display = "block";
  };

  // Close the chat modal
  function closeChat() {
    document.getElementById("chatModal").style.display = "none";
  }

  // Handle query submission
  function submitQuery() {
    let query = document.getElementById("userQuery").value;
    if (query) {
      alert("Your question has been submitted: " + query);
      document.getElementById("userQuery").value = "";
      closeChat();
    } else {
      alert("Please enter a question.");
    }
  }
