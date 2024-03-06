// Retrieve the query parameters from the URL
const params = new URLSearchParams(window.location.search);
const bookImageURL = params.get('image');
const startDate = params.get('startDate');
const endDate = params.get('endDate');
const bookCost = params.get('cost');

// Populate the elements with the captured data
document.getElementById('book-image').src = bookImageURL;
document.getElementById('start-date').textContent = `Start Date: ${startDate}`;
document.getElementById('end-date').textContent = `Return Date: ${endDate}`;
document.getElementById('book-cost').textContent = `Cost per 10 days: $${bookCost}`;

// Add event listener to the "Proceed to Complete Payment" button
const proceedButton = document.getElementById('proceed-button');
proceedButton.addEventListener('click', handlePayment);

// Function to handle the payment process
function handlePayment() {
  // Add your payment processing logic here
  // This function will be triggered when the button is clicked
}
