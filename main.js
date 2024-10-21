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
    
    // Task 3 technically starts here, Handle Stock Availability (its been a long night go easy on me)
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

//Task 4- Create a Checkout Event
purchaseButton.addEventListener('click', function() {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const isInStock = selectedOption.getAttribute('data-stock') === 'true';

    // Checks the stock availability before displaying these messages seen below 
    if (isInStock) {
        alert("Thank you for your purchase of Dior Sauvage Elixir!");
    } else {
        alert("Sorry, this luxiours cologne is out of stock, so no ladies for you man, -5000 aura");
    }
});

