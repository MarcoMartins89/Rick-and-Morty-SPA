# Rick-and-Morty-SPA

A part of my React lab this exercise, as the purpose of applying some concepts of react architecture such as components.
This project is a Single Page Application (SPA) built using vanilla JavaScript that interacts with the Rick and Morty API. It offers a seamless and interactive experience for users to explore characters from the Rick and Morty universe. The SPA features a clean and user-friendly interface with the following features.

## Features

- **Banner Image**: The application displays a banner image at the top, providing a visually appealing introduction to the app.
- **Search Input Field**: Users can search for characters by name using the input field.
- **Previous and Next Page Buttons**: Navigate through pages of character results with the Previous and Next arrow buttons (the buttons will only appear if such page exist).
- **Search Button**: Initiates a search based on the character name inserted in the input field.
- **Clear Search Button**: Resets the search input and displays the original list of characters (the button is hidden until input as a value).
- **Character Cards**: Displays character images and information in a card format. Each card is clickable and leads to a detailed view of the character.
- **Detailed Character View**: Upon clicking a character card, users are taken to a detailed view page with more information about the selected character. This page includes a Go Back button to return to the previous view.
- **Loading View**: A loading image is displayed while data is being fetched to prevent users from seeing a blank page.
- **Error View**: If an error is encountered while fetching data, an error view with a relevant message is displayed.

## Technologies Used

- **Frontend**: Developed using HTML, CSS, and JavaScript, with a Single Page Application (SPA) architecture implementing React like structure for seamless user experience.
- **API Integration**: Utilizes the Rick and Morty API for all character's information.

## Developed By:

- **[Marco Martins](https://www.linkedin.com/in/marco-martins-a-tech/)**

## Implementation Details

### HTML (index.html)
The main HTML file includes the structure of the application with a container to display content.

### CSS (styles.css)
CSS styles are applied to ensure the application looks clean and is responsive across different devices.

### JavaScript

**Main Application Logic (index.js and routes.js)**: Handles routing, fetching data from the API, and rendering the appropriate views based on user interaction.

**API Interaction (service/api.js)**: Contains functions for fetching data from the Rick and Morty API.

**Views**: Separate JavaScript modules for rendering different views:

**Error view (error.js)**: Displays an error message and image when data fetching fails, also includes a button that redirects the user to the main page.

**Loading view (loading.js)**: Shows a loading spinner or image while data is being fetched.

**Home view (home.js)**: Renders information of several characters, in a card format. Each card is clickable and leads to the Details view of the selected character. Also in this view the user have an input bar, buttons to different pages for more characters, a search button and a clear search button.

**Details view (characterDetails.js)**: Renders detailed information about a selected character, also includes a "Go Back" button that redirects the user to the previous page.

**Components**: Reusable UI components:

**Search Bar (searchBar.js)**: Contains the search input and buttons (imported from a button component) for changing page, searching and clearing the search.

**Character Card (card.js)**: Displays character information in a card format.

**Button (button.js)**: A component that is agnostic to the implementation that returns a button.

**Banner (banner.js)**: A component that returns a background image.

### Future Enhancements

Implement additional filtering options (e.g., by species, status).

Enhance UI/UX with animations and improved responsiveness.

Include unit tests for critical parts of the application.

Feel free to contribute to this project by submitting issues or pull requests on the GitHub repository. Enjoy exploring the world of Rick and Morty!
