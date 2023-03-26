# React Store App - Midterm

## Front End Web Development II

Simple web application that allows users to browse and search for different types of products.
## Assignment Instructions
### Include the following pages
1. Home page: Display a list of all the products available for sale.
2. Product detail page: Display the details of a single product, including its name, description, and price.
3. Search page: Allow users to search for products by name or category.
4. Cart page: Display a list of products that the user has added to their cart.

### Requirements
- Create a new ReactJS application using create-react-app.
- Create a Product component that displays the following information for each product:
    - Product name
    - Product image
    - Product price
    - Add to cart button
- Create a Products component that displays a list of products. This component should use the Product component to display each product in the list.
- Create a Cart component that displays the items currently in the user's cart. This component should display the following information for each item in the cart:
    - Product name
    - Product image
    - Product price
    - Quantity price
    - Remove from cart button
- Implement the functionality to add products to the cart when the user clicks the "Add to cart" button on a Product component. You should use state to keep track of the items in the cart. 
- Implement the functionality to remove items from the cart when the user clicks the "Remove from cart" button on a Cart component. You should use state to keep track of the items in the cart.
- Create a Checkout component that displays a form for the user to enter their shipping information. This component should also display the items in the cart, along with the total price of the order.
- Implement the functionality to submit the form in the Checkout component. When the user submits the form, the items in the cart should be cleared and the user should be redirected to a "Thank you" page.
- Implement navigation using the react-router-dom library.
- Use prop drilling to pass data between components as needed.

## Preview


## Features
- Smooth Navigation
- Product Search
    - Seaching by name
    - Preview of product
- View Large Graphics
    - Switching between graphics included in pack
- Adding product to cart
    - Quantity counting
    - Products can be removed from cart
    - Total price calculation
- Checkout
    - Preview of product
    - Shows the product details
    - Quantity counting
    - Products can be removed from cart
- Shipping Form
    - Users shipping information
    - Disable and enable checkout
- Success
    - Redirect to success message
    - Provides use a way back to products

## Future Updates
- Database
- Account Creation
- Payment Processing
- Downloads