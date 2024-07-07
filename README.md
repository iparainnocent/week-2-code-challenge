## Code Challenge: Interactive Shopping List

This challenge combines array iteration, DOM manipulation, and event handling to create an interactive shopping list application.

### Objective:
Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.

### Requirements:
Array: Maintain a JavaScript array to store shopping list items.

#### DOM Manipulation:
- Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
- Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
- Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).

#### Event Handling:
- Attach event listeners to the "Add" button to capture user input and add items to the list.
- Attach event listeners to the list of items to allow users to mark them as purchased.
- Attach an event listener to the "Clear List" button to remove all items from the list.
 

## Features

- Maintain a JavaScript array to store shopping list items.
- Create an HTML structure with an input field, a list container, and buttons for "Add", "Mark Purchased", and "Clear List".
- Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button.
- Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).
- Attach event listeners to the "Add" button, the list of items, and the "Clear List" button to handle user interactions.

## Usage
- Open the HTML file in a web browser.
- Enter an item in the input field and click the "Add" button to add it to the shopping list.
- Click on an item in the list to mark it as purchased. The item will be visually updated to show it as purchased.
- Click the "Clear List" button to remove all items from the shopping list.

## script.js
The script.js file is the main JavaScript file that powers the functionality of the Shopping List Application. It handles the user interactions and manages the shopping list data.

### Functions
- addItem():
This function is responsible for adding a new item to the shopping list.
It retrieves the text from the input field, checks if it's not empty, creates a new <li> element, sets its text content, adds a click event listener to mark the item as purchased, and appends the item to the shopping list.
It also adds the item text to the shoppingItems array.
- markPurchased(event):
This function is called when an item in the shopping list is clicked.
It toggles the purchased class on the clicked item, which can be used to style the item as purchased.
- clearList():
This function is responsible for removing all items from the shopping list and resetting the shoppingItems array.
It sets the innerHTML of the shopping list container to an empty string, effectively clearing the list.
### Event Listeners
The script sets up the following event listeners:

- addBtn Click Event:
This event listener calls the addItem() function when the "Add" button is clicked.
- markPurchasedBtn Click Event:
This event listener selects all the items in the shopping list that have the purchased class, removes them from the list, and updates the shoppingItems array accordingly.
- clearListBtn Click Event:
This event listener calls the clearList() function when the "Clear List" button is clicked.

## Installation 
- HTML: The structure and layout of the web page.
- CSS: The styling and visual appearance of the application.
- JavaScript: The functionality and interactivity of the application.

## Author
Innocent Omonya.