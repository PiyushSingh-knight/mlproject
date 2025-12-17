// static/script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('.btn-primary');

    form.addEventListener('submit', function() {
        // Change button text and disable it to prevent double submission
        submitBtn.value = "Processing Prediction...";
        submitBtn.style.opacity = "0.7";
        submitBtn.style.cursor = "not-allowed";
    });

    // Simple validation alert for scores
    const scoreInputs = document.querySelectorAll('input[type="number"]');
    scoreInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value < 0 || this.value > 100) {
                alert("Please enter a score between 0 and 100");
                this.value = "";
            }
        });
    });
});