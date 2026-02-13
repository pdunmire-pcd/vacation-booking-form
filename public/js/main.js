// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('find-my-vacation-form');
    const destinationSelect = document.getElementById('destination');
    const departureDateInput = document.getElementById('departure-date');
    const numberOfTravelersInput = document.getElementById('number-of-travelers');
    
    // Error message elements
    const destinationError = document.getElementById('destination-error');
    const dateError = document.getElementById('date-error');
    const numberOfError = document.getElementById('number-of-error');
    
    // Form submission validation
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default submission
        
        let isValid = true;
        
        // Clear all previous error messages
        clearAllErrors();
        
        // Validate Destination
        if (destinationSelect.value === 'none' || destinationSelect.value === '') {
            showError(destinationError, 'Please select a destination');
            isValid = false;
        }
        
        // Validate Departure Date
        if (departureDateInput.value.trim() === '') {
            showError(dateError, 'Please select a departure date');
            isValid = false;
        }
        
        // Validate Number of Travelers
        const numberOfTravelers = parseInt(numberOfTravelersInput.value);
        if (isNaN(numberOfTravelers) || numberOfTravelers <= 0) {
            showError(numberOfError, 'Number of travelers must be greater than 0');
            isValid = false;
        }
        
        // If all validations pass, submit the form
        if (isValid) {
            // Form is valid - submit to server
            form.submit();
        }
    });
    
    // Real-time validation - Clear errors as user fixes them
    destinationSelect.addEventListener('change', function() {
        if (this.value !== 'none' && this.value !== '') {
            clearError(destinationError);
        }
    });
    
    departureDateInput.addEventListener('change', function() {
        if (this.value.trim() !== '') {
            clearError(dateError);
        }
    });
    
    numberOfTravelersInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (!isNaN(value) && value > 0) {
            clearError(numberOfError);
        }
    });
    
    // Helper function to show error message
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Helper function to clear a specific error
    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    // Helper function to clear all errors
    function clearAllErrors() {
        clearError(destinationError);
        clearError(dateError);
        clearError(numberOfError);
    }
});