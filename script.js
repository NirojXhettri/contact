
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/myyqvwzp",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "demo@gmail.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    },
            // Callback function for successful form submission
            onSuccess: function () {
                // Show the success message and hide the form
                document.getElementById("success-message").style.display = "block";
                document.querySelector("form").style.display = "none";
            },
            // Callback function for unsuccessful form submission
            onError: function (error) {
                // Show an error message based on the error response
                const errorMessage = document.getElementById("error-message");
                errorMessage.style.display = "block";
                errorMessage.textContent = error.message;
            }
        });


