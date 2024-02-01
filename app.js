document.addEventListener('DOMContentLoaded', function () {
    // Function to randomly select and display a testimonial in the footer review section
    function updateFooterReview() {
        const testimonials = document.querySelectorAll('.zs--testimonials--card');
        const randomIndex = Math.floor(Math.random() * testimonials.length);
        const selectedTestimonial = testimonials[randomIndex];
        const reviewContainer = document.querySelector('.zs--footer-review-container');
        const review = selectedTestimonial.querySelector('.zs--testimonials--card__massage').textContent;
        const author = selectedTestimonial.querySelector('.zs--testimonials--card__name').textContent;

        reviewContainer.innerHTML = `
            <h3 class="zs--footer-review-section-title">Review</h3>
            <p class="zs--footer-review-desc">${review}</p>
            <p class="zs--footer-review-author">- ${author}</p>
        `;
    }

    // Initial call to update the footer review
    updateFooterReview();

    // Update footer review every 7 seconds
    setInterval(updateFooterReview, 7000);
});
