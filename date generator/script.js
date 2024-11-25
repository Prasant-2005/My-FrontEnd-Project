// Get references to the HTML elements
const dateInput = document.getElementById('date');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// Add an event listener to the button to handle the click
btn.addEventListener('click', function() {
    // Get the value of the date input
    const selectedDate = dateInput.value;

    // Check if a date is selected, and display the result
    if (selectedDate) {
        result.textContent = `Your date was clicked: ${selectedDate}`;
    } else {
        result.textContent = "Please select a date.";
    }
});