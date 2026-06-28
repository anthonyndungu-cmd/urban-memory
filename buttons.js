const myButton = document.getElementById('artist-button');

if (myButton) {
  myButton.addEventListener('click', function() {
    location.href = 'artist.html';
  });
}

const artistBtn = document.getElementById('profile-button');

if (artistBtn) {
  artistBtn.addEventListener('click', function() {
    location.href = 'artist-profile.html';
  });
}