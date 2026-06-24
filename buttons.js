const myButton = document.createElement('button');
myButton.innerText = 'Explore artists';
myButton.className = 'artist-buttton'

myButton.addEventListener('click', function() {
    location.href = 'artist-profile.html';
});

const container = document.getElementById('artist-button');
container.appendChild(myButton);

document.querySelector('button').addEventListener('click', function () {
  const firstName = document.querySelector('input[aria-label="First name"]').value;
  const lastName = document.querySelector('input[aria-label="Last name"]').value;
  const email = document.getElementById('colFormLabel').value;
  const select = document.getElementById('floatingSelect').value;
  const comments = document.getElementById('floatingTextarea2').value;

  if (!firstName || !lastName || !email) {
    alert('Please fill in all required fields.');
    return;
  }

  alert(`Form submitted!\nName: ${firstName} ${lastName}\nEmail: ${email}`);
});