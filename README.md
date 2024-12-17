# Ex.08 Design of Interactive Image Gallery
## Date:17/12/24

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
gallery.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Photo Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    margin: 0;
}

/* Header Styling */
header {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
    width: 100%;
}

h1 {
    font-size: 2rem;
    margin: 0;
}

/* Gallery Styles */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 20px auto;
}

/* Gallery Item */
.gallery-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.gallery-item:hover {
    transform: scale(1.05);
}

/* Description Popup Styles */
.description-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
    z-index: 1000;
}

.description-popup p {
    font-size: 1rem;
    margin-bottom: 15px;
}

.description-popup button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.description-popup button:hover {
    background-color: #444;
}

/* Footer Styling */
footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 10px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}

footer a {
    color: #f39c12;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

</style>
<body>

    <header>
        <h1>Interactive Photo Gallery</h1>
    </header>

    <div class="gallery">
        <div class="gallery-item" onclick="showDescription('Description for Photo 1')">
            <img src="hema.jpg" alt="Photo 1">
        </div>
        <div class="gallery-item" onclick="showDescription('Description for Photo 2')">
            <img src="2.jpg" alt="Photo 2">
        </div>
        <div class="gallery-item" onclick="showDescription('Description for Photo 3')">
            <img src="3.jpeg" alt="Photo 3">
        </div>
        <div class="gallery-item" onclick="showDescription('Description for Photo 4')">
            <img src="4.jpeg" alt="Photo 4">
        </div>
        <div class="gallery-item" onclick="showDescription('Description for Photo 5')">
            <img src="5.jpeg" alt="Photo 5">
        </div>
    </div>

    <div id="description-popup" class="description-popup">
        <p id="description-text"></p>
        <button onclick="closeDescription()">Close</button>
    </div>

    <!-- Developed By Section -->
    <footer>
        <p>Developed by <a href="https://www.yourportfolio.com" target="_blank">A.Hema</a></p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>

style.css

/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    margin: 0;
}

/* Header Styling */
header {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
    width: 100%;
}

h1 {
    font-size: 2rem;
    margin: 0;
}

/* Gallery Styles */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 20px auto;
}

/* Gallery Item */
.gallery-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.gallery-item:hover {
    transform: scale(1.05);
}

/* Description Popup Styles */
.description-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
    z-index: 1000;
}

.description-popup p {
    font-size: 1rem;
    margin-bottom: 15px;
}

.description-popup button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.description-popup button:hover {
    background-color: #444;
}

/* Footer Styling */
footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 10px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}

footer a {
    color: #f39c12;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

scripts.js

// Function to display the description popup
function showDescription(description) {
    const descriptionPopup = document.getElementById('description-popup');
    const descriptionText = document.getElementById('description-text');
    
    // Set the text inside the popup
    descriptionText.innerText = description;

    // Show the popup
    descriptionPopup.style.display = 'block';
}

// Function to close the description popup
function closeDescription() {
    const descriptionPopup = document.getElementById('description-popup');
    descriptionPopup.style.display = 'none';
}
```

## OUTPUT:
![alt text](<keerthana/igallery/static/Screenshot (59).png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
