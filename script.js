document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const feedbackDiv = document.getElementById('formFeedback');
        feedbackDiv.textContent = data.message; // Display the feedback message
        feedbackDiv.style.color = data.status === 'success' ? 'green' : 'red'; // Set message color
        if (data.status === 'success') {
            document.getElementById('contactForm').reset(); // Reset the form on success
        }
    })
    .catch(error => {
        const feedbackDiv = document.getElementById('formFeedback');
        feedbackDiv.textContent = "An error occurred. Please try again.";
        feedbackDiv.style.color = 'red';
    });
});
let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showNextImage() {
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next index
    images[currentIndex].classList.add('active'); // Show next image
}

// Change image every second (1000 milliseconds)
setInterval(showNextImage, 1000);