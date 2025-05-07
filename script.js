// JavaScript for carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Function to change the active image
function showImage(index) {
  // Remove 'active' class from all images
  images.forEach(image => image.classList.remove('active'));
  
  // Add 'active' class to the current image
  images[index].classList.add('active');
}

// Show the first image initially
showImage(currentIndex);

// Previous button functionality
document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
  showImage(currentIndex);
});

// Next button functionality
document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

