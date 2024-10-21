//Task 2-Add Event Listeners for Product Selection 
const priceDisplay = document.getElementById('bottle-price');  
const sizeSelector = document.getElementById('bottle-size');   
const purchaseButton = document.getElementById('buy-button');  

// Event listener for when the customer is big balling and changes the bottle size
sizeSelector.addEventListener('change', function(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    
    // Updates the  price based on size selection
    const newPrice = selectedOption.getAttribute('data-price');
    priceDisplay.textContent = `$${newPrice}`;
    
    // Checks to see if the selected size is in stock
    const isInStock = selectedOption.getAttribute('data-stock') === 'true';
    purchaseButton.disabled = !isInStock;

    // Changes the button text based on stock availability (Sorry Big Ballers, No Expensive bottle today)
    if (isInStock) {
        purchaseButton.textContent = "Buy Now";
    } else {
        purchaseButton.textContent = "Out of Stock";
    }
});