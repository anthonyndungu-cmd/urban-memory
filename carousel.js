const artists = [
  { name: 'Rihanna', genre: 'R&B / Pop', img: 'Images/Rihanna.jpg' },
  { name: 'Kanye West', genre: 'Hip-Hop', img: 'Images/Kanye west.jpg' },
  { name: 'Kendrick Lamar', genre: 'Hip-Hop', img: 'Images/Kendrick lamar.jpg' }
];

let currentIndex = 0;

const carouselImg = document.getElementById('carousel-img');
const carouselName = document.getElementById('carousel-name');
const carouselGenre = document.getElementById('carousel-genre');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

function updateCarousel() {
  const artist = artists[currentIndex];
  carouselImg.src = artist.img;
  carouselImg.alt = artist.name;
  carouselName.textContent = artist.name;
  carouselGenre.textContent = artist.genre;
}

if (prevBtn) {
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + artists.length) % artists.length;
    updateCarousel();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % artists.length;
    updateCarousel();
  });
}