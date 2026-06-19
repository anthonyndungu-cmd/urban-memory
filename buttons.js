const myButton = document.createElement('button');
myButton.innerText = 'Show more';
myButton.className = 'artist-buttton'

myButton.addEventListener('click', function() {
    location.href = 'artist.html';
});

const container = document.getElementById('button-container');
container.appendChild(myButton);
