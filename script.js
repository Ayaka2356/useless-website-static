// Add functionality to the features section
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        // Add functionality for each button
        if (button.textContent === 'Share Code') {
            // Share code functionality
            console.log('Share code');
        } else if (button.textContent === 'Get Codes') {
            // Get codes functionality
            console.log('Get codes');
        } else if (button.textContent === 'Get Help') {
            // Get help functionality
            console.log('Get help');
        }
    });
});