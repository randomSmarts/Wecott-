// Sample boycott data for dynamic loading
const boycottData = [
    {
        logo: "https://via.placeholder.com/150", // Placeholder image for now
        name: "Boycott Brand A",
        description: "This boycott is about environmental issues surrounding Brand A.",
        id: 1
    },
    {
        logo: "https://via.placeholder.com/150", // Placeholder image for now
        name: "Boycott Company X",
        description: "Company X is involved in labor rights violations.",
        id: 2
    },
    {
        logo: "https://via.placeholder.com/150", // Placeholder image for now
        name: "Boycott Tech Giant Z",
        description: "Boycotting Tech Giant Z for monopolistic practices.",
        id: 3
    }
];

// Dynamically load boycott data into the grid
function loadBoycotts() {
    const boycottGrid = document.getElementById('boycott-grid');
    boycottGrid.innerHTML = '';  // Clear previous content if any

    boycottData.forEach(boycott => {
        const boycottCard = document.createElement('div');
        boycottCard.classList.add('boycott-card');

        const logo = document.createElement('img');
        logo.src = boycott.logo;
        logo.alt = boycott.name;
        logo.classList.add('boycott-thumbnail');

        const title = document.createElement('h3');
        title.textContent = boycott.name;

        const description = document.createElement('p');
        description.textContent = boycott.description;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('boycott-actions');

        const joinButton = document.createElement('button');
        joinButton.textContent = 'Join Boycott';
        actionsDiv.appendChild(joinButton);

        const shareButton = document.createElement('button');
        shareButton.textContent = 'Share Boycott';
        actionsDiv.appendChild(shareButton);

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        actionsDiv.appendChild(detailsButton);

        boycottCard.appendChild(logo);
        boycottCard.appendChild(title);
        boycottCard.appendChild(description);
        boycottCard.appendChild(actionsDiv);

        boycottGrid.appendChild(boycottCard);
    });
}

// Trigger loadBoycotts when the page loads
window.onload = function() {
    loadBoycotts();
}

// Modal functionality for adding a new boycott
const modal = document.getElementById("boycott-modal");
const addBoycottBtn = document.getElementById("add-boycott-btn");
const closeModal = document.getElementById("close-modal");

// Open modal on click
addBoycottBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on click
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Add new boycott data when the form is submitted
document.getElementById('add-boycott-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const imageUrl = document.getElementById('boycott-image').value;
    const title = document.getElementById('boycott-title').value;
    const description = document.getElementById('boycott-description').value;

    const newBoycott = {
        logo: imageUrl,
        name: title,
        description: description,
        id: boycottData.length + 1
    };

    boycottData.push(newBoycott);
    loadBoycotts();

    // Close the modal and reset form
    modal.style.display = "none";
    this.reset();
});

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Example of search functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredData = boycottData.filter(boycott => boycott.name.toLowerCase().includes(query));

    // Re-load grid with filtered data
    const boycottGrid = document.getElementById('boycott-grid');
    boycottGrid.innerHTML = '';  // Clear previous content

    filteredData.forEach(boycott => {
        const boycottCard = document.createElement('div');
        boycottCard.classList.add('boycott-card');

        const logo = document.createElement('img');
        logo.src = boycott.logo;
        logo.alt = boycott.name;
        logo.classList.add('boycott-thumbnail');

        const title = document.createElement('h3');
        title.textContent = boycott.name;

        const description = document.createElement('p');
        description.textContent = boycott.description;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('boycott-actions');

        const joinButton = document.createElement('button');
        joinButton.textContent = 'Join Boycott';
        actionsDiv.appendChild(joinButton);

        const shareButton = document.createElement('button');
        shareButton.textContent = 'Share Boycott';
        actionsDiv.appendChild(shareButton);

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        actionsDiv.appendChild(detailsButton);

        boycottCard.appendChild(logo);
        boycottCard.appendChild(title);
        boycottCard.appendChild(description);
        boycottCard.appendChild(actionsDiv);

        boycottGrid.appendChild(boycottCard);
    });
});
