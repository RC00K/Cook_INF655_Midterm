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
- Implement the functionality to add products to the cart when the user clicks the "Add to cart" button on a Product component. 
- Implement the functionality to remove items from the cart when the user clicks the "Remove from cart" button on a Cart component.
- Create a Checkout component that displays a form for the user to enter their shipping information. This component should also display the items in the cart, along with the total price of the order.
- Implement the functionality to submit the form in the Checkout component. When the user submits the form, the items in the cart should be cleared and the user should be redirected to a "Thank you" page.
- Implement navigation using the react-router-dom library.
- Use prop drilling to pass data between components as needed.

## Preview
![Home](https://user-images.githubusercontent.com/48497255/227750937-4109bb6a-4284-4ec7-99d7-ffeb0ad2cf0c.jpg)
![Product](https://user-images.githubusercontent.com/48497255/227750949-35e40b87-82eb-44d3-a2bf-b793ee9b5f66.jpg)
![Search](https://user-images.githubusercontent.com/48497255/227750957-23c26538-d3e1-4e07-9e53-f295bc65a2f0.jpg)
![Checkout](https://user-images.githubusercontent.com/48497255/227750963-48c0e6dd-3970-4616-8cce-51c462f4d654.jpg)

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
