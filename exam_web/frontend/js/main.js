// Utility Functions for Exam_Web Frontend

/**
 * Validates an email address using regex
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates a phone number (10 digits)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid 10-digit phone number
 */
function validatePhone(phone) {
    const phoneRegex = /^\\d{10}$/;
    return phoneRegex.test(phone);
}

/**
 * Starts a 60-second OTP countdown timer
 * @param {HTMLElement} button - The button to disable/enable
 * @param {HTMLElement} countdownElement - Element to display countdown
 */
function startOtpTimer(button, countdownElement) {
    let timeLeft = 60;
    button.disabled = true;
    countdownElement.textContent = `Resend in ${timeLeft}s`;

    const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = `Resend in ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            button.disabled = false;
            countdownElement.textContent = '';
        }
    }, 1000);
}

/**
 * Shows an error message in a styled container
 * @param {string} message - The error message to show
 */
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
    }
}

/**
 * Clears the error message display
 */
function clearError() {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.classList.remove('show');
    }
}
