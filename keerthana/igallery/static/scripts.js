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
