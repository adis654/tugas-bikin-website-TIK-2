document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // For demo purposes; to actually send messages, connect to a server or use a service
  document.getElementById('form-status').textContent = "Thank you! Your message has been sent.";
  this.reset();
});
