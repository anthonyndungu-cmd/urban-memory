const submitBtn = document.getElementById('submit-btn');
const errorMsg = document.getElementById('form-error');

if (submitBtn) {
  submitBtn.addEventListener('click', function() {

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('colFormLabel').value.trim();
    const selectValue = document.getElementById('floatingSelect').value;
    const comment = document.getElementById('floatingTextarea2').value.trim();


    errorMsg.textContent = '';

  
    if (firstName === '') {
      errorMsg.textContent = 'Please enter your first name.';
      return;
    }

  
    if (lastName === '') {
      errorMsg.textContent = 'Please enter your last name.';
      return;
    }

 
    if (email === '') {
      errorMsg.textContent = 'Please enter your email.';
      return;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMsg.textContent = 'Please enter a valid email address.';
      return;
    }

 
    if (selectValue === 'Open this select menu') {
      errorMsg.textContent = 'Please choose an option from the dropdown.';
      return;
    }

    if (comment === '') {
      errorMsg.textContent = 'Please leave a comment before submitting.';
      return;
    }


    errorMsg.classList.remove('text-danger');
    errorMsg.classList.add('text-success');
    errorMsg.textContent = 'Thanks! Your message has been sent.';

    document.getElementById('contact-form').reset();

  });
}