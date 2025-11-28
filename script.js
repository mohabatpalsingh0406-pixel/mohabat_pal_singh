document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('bookingForm');
  var msg = document.getElementById('formMessage');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    // built-in validity
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    // phone check (numbers only 8-15)
    var phone = document.getElementById('phone').value.trim();
    var phoneRe = /^[0-9]{8,15}$/;
    if(!phoneRe.test(phone)){
      msg.textContent = 'Please enter a valid phone number (8-15 digits).';
      msg.style.color = 'crimson';
      return;
    }

    // If here, form is valid. Simulate submission result (assignment requirement)
    msg.style.color = 'green';
    msg.textContent = 'Thank you — your booking request has been received. We will contact you to confirm your appointment.';
    form.reset();
  });
});