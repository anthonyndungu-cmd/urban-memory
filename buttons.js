const myButton = document.createElement('button');
myButton.innerText = 'Explore artists';
myButton.className = 'artist-buttton'

myButton.addEventListener('click', function() {
    location.href = 'artist-profile.html';
});

const container = document.getElementById('button-container');
container.appendChild(myButton);
