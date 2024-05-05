document.addEventListener("DOMContentLoaded", function() {
    // Function to scroll to a section with an offset


    const menu = document.getElementById("menu");
    // Define a global variable to store the shopping cart items
    let shoppingCart = [];
        // Define your food items organized by sections
        const foodItemsBySection = {
            "pizza-section": [
                { name: "Cheese Pizza", description: "A classic Italian pizza topped with tomatoes, mozzarella, and fresh basil.", price: "10", image: "Images/pizza1.jpg" },
                { name: "Meat Lover's Pizza", description: "Savor our Meat Lover’s Pizza, a feast of pepperoni, sausage, ham, and bacon, nestled in melted cheese and robust tomato sauce on a perfect crust", price: "13", image: "Images/pizza2.jpg" },
                { name: "Pepperoni Pizza", description: "A cheesy Italian pizza topped with fresh pepperoni.", price: "11", image: "Images/pizza3.jpg" },
                // Add more pizza items 
            ],
            "hamburgers-section": [
                { name: "Classic Cheeseburger", description: "A juicy beef patty topped with melted cheese, lettuce, tomato, and pickles.", price: "8", image: "Images/hamburger1.jpg" },
                { name: "Double Jalapeño Cheeseburger", description: "Experience the fiery kick of our Double Jalapeño Cheeseburger, stacked with two juicy patties, melted cheese, for a burst of flavor in every bite.", price: "15", image: "Images/hamburger2.jpg" },
                { name: "Bacon Cheeseburger", description: "Savor the classic taste of our Bacon Cheeseburger, featuring a succulent patty topped with crispy bacon and melted cheese, all nestled between two soft buns.", price: "12", image: "Images/hamburger3.jpg" },
                // Add more burger items 
            ],
            // Add more sections and items 
            "sandwiches-section": [
                { name: "Classic Sandwich", description: "Classic sliced deli meat, lettuce and tomatoe in between two buttery slices of toast.", price: "6", image: "Images/sandwich1.jpg" },
                { name: "Roast Beef Sandwich", description: "Packed with tender, slow-roasted beef, served on freshly baked bread. Served with a side of au-jus.", price: "15", image: "Images/sandwich2.jpg" },
                { name: "Reuben Sandwich", description: "A mouthwatering combination of corned beef, Swiss cheese, tangy sauerkraut, and creamy Russian dressing, all grilled to perfection on rye bread.", price: "15", image: "Images/sandwich3.jpg" },
                { name: "Bacon, Egg, and Cheese Sandwich", description: "A breakfast classic featuring crispy bacon, a perfectly cooked egg, and melted cheese, all served on a toasted bun for a satisfying and delicious start to your morning.", price: "12", image: "Images/sandwich4.jpg" },
                // Add more burger items as needed
            ],
            "desserts-section": [
                { name: "Molten Lava Chocolate Cake", description: "A decadent dessert featuring a rich chocolate cake with a gooey, molten chocolate center that oozes out upon first bite, served warm for a truly indulgent experience.", price: "8", image: "Images/dessert1.jpg" },
                { name: "Apple Pie Slice", description: "A timeless dessert featuring tender, spiced apples enveloped in a flaky, golden crust, served warm for a taste of home-baked comfort in every bite", price: "9", image: "Images/dessert2.jpg" },
                { name: "Cheesecake Slice", description: "A creamy and smooth dessert with a buttery graham cracker crust, topped with a light sour cream layer, offering a perfect balance of sweetness and tang in every bite.", price: "10", image: "Images/dessert3.jpg" },
                // Add more burger items as needed
            ],
        };
    
    
    
      // Function to generate food items for a specific section dynamically
      function generateMenuForSection(sectionId) {
        const section = document.getElementById(sectionId);
        const foodItems = foodItemsBySection[sectionId];
    
        // Get the container for menu items
        const itemsContainer = section.querySelector('.menu-items-container');
        itemsContainer.innerHTML = ""; // Clear existing items in the container
    
        // Loop through food items for the section and create items
        foodItems.forEach(item => {
            const foodItem = document.createElement("div");
            foodItem.classList.add("menu-item");
    
            // Create image element
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            foodItem.appendChild(img);
    
            // Create item details container
            const itemDetails = document.createElement("div");
            itemDetails.classList.add("item-details");
    
            // Create h3 element for name
            const itemName = document.createElement("h3");
            itemName.textContent = item.name;
            itemDetails.appendChild(itemName);
    
            // Create p element for description
            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;
            itemDetails.appendChild(itemDescription);
    
            // Create span element for price
            const itemPrice = document.createElement("span");
            itemPrice.textContent = `$${item.price}`;
            itemDetails.appendChild(itemPrice);
    
            // Create container for price, quantity selector, and order button
            const priceAndControlsContainer = document.createElement("div");
            priceAndControlsContainer.classList.add("price-and-controls-container");
    
            // Create container for quantity selector and buttons
            const quantityControls = document.createElement("div");
            quantityControls.classList.add("quantity-controls");
    
            // Create button for decreasing quantity
            const decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.addEventListener("click", function() {
                const currentValue = parseInt(quantityInput.value);
                if (currentValue > 0) {
                    quantityInput.value = currentValue - 1;
                }
            });
            quantityControls.appendChild(decreaseButton);
    
            // Create input field for quantity
            const quantityInput = document.createElement("input");
            quantityInput.type = "number";
            quantityInput.min = 0;
            quantityInput.value = 0;
            quantityInput.classList.add("item-quantity");
            quantityControls.appendChild(quantityInput);
    
            // Create button for increasing quantity
            const increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.addEventListener("click", function() {
                const currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
            });
            quantityControls.appendChild(increaseButton);
    
            priceAndControlsContainer.appendChild(itemPrice);
            priceAndControlsContainer.appendChild(quantityControls);
           
            // Function to add an order to the shopping cart
    function addToShoppingCart(order) {
        shoppingCart.push(order);
        console.log(shoppingCart); // Log the content of shoppingCart array
    }
    function displayCartMenu() {
        
    
        const cartMenu = document.getElementById("cart-menu");
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = ""; // Clear previous items
    
        // Check if the shopping cart has items
        if (shoppingCart.length === 0) {
            cartItemsContainer.textContent = "Your cart is empty.";
        } else {
            // Loop through each item in the shopping cart
            shoppingCart.forEach(item => {
                const cartItemDiv = document.createElement("div");
                cartItemDiv.textContent = `${item.quantity} ${item.itemName} - $${item.totalPrice}`;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }
    
        // Show or hide the cart menu based on the number of items in the shopping cart
        if (shoppingCart.length > 0) {
            console.log("Displaying cart menu"); // Log when displaying the cart menu
            cartMenu.style.display = "block";
        } else {
            console.log("Hiding cart menu"); // Log when hiding the cart menu
            cartMenu.style.display = "none";
        }
    }
    function displayShoppingCart() {
        console.log("displayCart function called"); // Log when the function is called
        // Get the container where the shopping cart items will be displayed
        const cartContainer = document.getElementById("cart-container");
        
        // Clear the previous content of the cart container
        cartContainer.innerHTML = "";
        
        // Check if there are items in the shopping cart
        if (shoppingCart.length === 0) {
            cartContainer.textContent = "Your shopping cart is empty.";
        } else {
            // Loop through each item in the shopping cart
            shoppingCart.forEach((item, index) => {
                // Create a div element for the cart item
                const cartItemDiv = document.createElement("div");
                cartItemDiv.classList.add("cart-item");
                
                // Create spans to display item details (name, quantity, total price)
                const itemNameSpan = document.createElement("span");
                itemNameSpan.textContent = item.itemName;
    
                // Add a space between the item name and the quantity
                const spaceSpan1 = document.createElement("span");
                spaceSpan1.textContent = " ";
    
                const itemQuantitySpan = document.createElement("span");
                itemQuantitySpan.textContent = `x ${item.quantity}`;
    
                // Add a space between the quantity and "Total Price"
                const spaceSpan2 = document.createElement("span");
                spaceSpan2.textContent = " ";
    
                const itemTotalPriceSpan = document.createElement("span");
                itemTotalPriceSpan.textContent = `: $${item.totalPrice}`;
    
                // Create a remove button for the item
                const removeButton = document.createElement("button");
                removeButton.textContent = "-";
                removeButton.classList.add("remove-button"); 
                removeButton.addEventListener("click", function() {
                    // Remove the item from the shopping cart array
                    shoppingCart.splice(index, 1);
                    // Redisplay the updated shopping cart
                    displayShoppingCart();
                });
    
                // Append the spans and remove button to the cartItemDiv
                cartItemDiv.appendChild(itemNameSpan);
                cartItemDiv.appendChild(spaceSpan1);
                cartItemDiv.appendChild(itemQuantitySpan);
                cartItemDiv.appendChild(spaceSpan2);
                cartItemDiv.appendChild(itemTotalPriceSpan);
                cartItemDiv.appendChild(removeButton);
    
                // Append the cart item div to the cart container
                cartContainer.appendChild(cartItemDiv);
            });
    
            // Calculate the total cost of all items in the shopping cart
            const totalCost = calculateTotalCost();
    
            // Create a span for the total cost
            const totalCostSpan = document.createElement("span");
            totalCostSpan.textContent = `Total: $${totalCost}`;
            totalCostSpan.style.display = "block"; // Display on a different line
            totalCostSpan.style.marginTop = "10px"; // Add spacing
    
            // Append the total cost span to the cart container
            cartContainer.appendChild(totalCostSpan);
    
            // Create the checkout button
            const checkoutButton = document.createElement("button");
            checkoutButton.textContent = "Check Out";
            checkoutButton.classList.add("checkout-button"); 
    
            // Function to close the cart container and empty its contents
            function closeCartContainer() {
                // Hide the cart container
                cartContainer.innerHTML = ""; // Clear the contents of the cart
                cartContainer.style.display = "none"; // Hide the cart container
            }
    
            // Add an event listener to the checkout button
checkoutButton.addEventListener("click", function() {
    // Redirect to the orderConfirmation.html page
    window.location.href = "orderConfirmation.html";
    // Optionally, close the cart container and empty its contents
    closeCartContainer();
});

    
            // Append the checkout button to the cart container
            cartContainer.appendChild(checkoutButton);
        }
    }
    
    
    // Function to calculate the total cost of all items in the shopping cart
    function calculateTotalCost() {
        return shoppingCart.reduce((total, item) => total + item.totalPrice, 0);
    }
    
            // Create button element for order
            const orderButton = document.createElement("button");
            orderButton.type = "button";
            orderButton.textContent = "Add to Cart";
            orderButton.addEventListener("click", function() {
                const quantity = parseInt(quantityInput.value);
                if (quantity > 0) {
                    const totalCost = quantity * item.price;
                    const order = {
                        itemName: item.name,
                        quantity: quantity,
                        totalPrice: totalCost
                    };
                    addToShoppingCart(order);
                    alert(`${quantity} ${item.name}(s) have been added to your cart for a total of $${totalCost}.`);
                    // Display items in the shopping cart
                    displayShoppingCart();
                    // Process orders further
                    processOrders();
                } else {
                    alert("Please select a quantity greater than 0.");
                }
            });
            
            priceAndControlsContainer.appendChild(orderButton);
    
            itemDetails.appendChild(priceAndControlsContainer);
    
            // Append itemDetails to foodItem
            foodItem.appendChild(itemDetails);
    
            // Append foodItem to itemsContainer
            itemsContainer.appendChild(foodItem);
        });
    }
    
    // Call the function to generate menu items for each section
    for (const sectionId in foodItemsBySection) {
        generateMenuForSection(sectionId);
    }
    ;
    
   
    
    // Function to process orders further
    function processOrders() {
        // Calculate the total cost of all items in the shopping cart
        const totalCost = shoppingCart.reduce((total, item) => total + item.totalPrice, 0);
        
        // Display the total cost to the user
        
        
        // Further processing logic (e.g., placing the order, clearing the shopping cart, etc.)
        // You can implement additional logic here based on your requirements
    }    
    
    
    




// Get the cart icon and cart menu elements
const cartIcon = document.getElementById("cart-icon");
const cartMenu = document.getElementById("cart-menu");




// CheckOut Button Const
const checkoutButton = document.getElementById("checkout-button");




const cartContainer = document.getElementById("cart-container");

cartIcon.addEventListener("click", function() {
    cartContainer.classList.toggle("show-cart");
});
// Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const items = JSON.parse(decodeURIComponent(urlParams.get('items')));

// Calculate the total cost of all items in the shopping cart
const totalCost = items.reduce((total, item) => total + item.totalPrice, 0);

// Display the order details on the page
const itemNameElement = document.getElementById('itemName');
const quantityElement = document.getElementById('quantity');
const totalAmountElement = document.getElementById('totalAmount');

// Loop through each item in the order and populate the HTML elements
items.forEach(item => {
    const itemName = item.itemName;
    const quantity = item.quantity;
    const totalAmount = item.totalPrice;

    // Create new elements to display each item's details
    const itemDetails = document.createElement('div');
    itemDetails.innerHTML = `
        <p>Item Name: ${itemName}</p>
        <p>Quantity: ${quantity}</p>
        <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;

    // Append the item details to the order confirmation section
    document.querySelector('.order-confirmation').appendChild(itemDetails);
});

// Display the total cost
totalAmountElement.textContent = `$${totalCost.toFixed(2)}`;






       
    });

// Function to scroll to a section with an offset
function scrollToSection(sectionId, event) {
    event.preventDefault(); // Prevent the default behavior of anchor link
    
    const section = document.getElementById(sectionId);
    const yOffset = -128; // Adjust this value according to navbar height
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    }