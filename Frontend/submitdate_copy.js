// Function to handle date filtering
function sendfilterdate() {
    const startdate = document.getElementById('startDate').value;
    const enddate = document.getElementById('endDate').value;
    
    if (startdate === "" || enddate === "") {
        alert('Please select both start and end dates.');
    } else {
        console.log('Start Date:', startdate); // Log start date value
        console.log('End Date:', enddate);     // Log end date value
    }
}

// Ensure DOM is fully loaded before adding event listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed'); // Log when DOM is ready
    const button = document.getElementById('submitDateRange');
    if (button) {
        button.addEventListener('click', sendfilterdate);
    } else {
        console.error('Submit button not found');
    }
});
