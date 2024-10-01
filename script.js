// Sample boycott data for dynamic loading
const boycottData = [
    {
        logo: "https://via.placeholder.com/150", // Placeholder image for now
        name: "Boycott Brand A",
        description: "This boycott is about environmental issues surrounding Brand A.",
        id: 1,
        peopleJoined: 500,
        createdOn: "2023-01-01"
    },
    {
        logo: "https://via.placeholder.com/150", // Placeholder image for now
        name: "Boycott Company X",
        description: "Company X is involved in labor rights violations.",
        id: 2,
        peopleJoined: 300,
        createdOn: "2022-05-10"
    },
    {
        logo: "https://via.placeholder.com/150", // Placeholder image for now
        name: "Boycott Tech Giant Z",
        description: "Boycotting Tech Giant Z for monopolistic practices.",
        id: 3,
        peopleJoined: 1000,
        createdOn: "2021-08-20"
    }
];

// Dynamically load boycott data into the grid
function loadBoycotts() {
    const boycottGrid = document.getElementById('boycott-grid');
    boycottGrid.innerHTML = '';  // Clear previous content if any

    boycottData.forEach(boycott => {
        const boycottCard = document.createElement('div');
        boycottCard.classList.add('boycott-card');

        boycottCard.addEventListener('click', () => {
            // Redirect to the community page with the boycott id as a parameter
            window.location.href = `community.html?id=${boycott.id}`;
        });

        const logo = document.createElement('img');
        logo.src = boycott.logo;
        logo.alt = boycott.name;
        logo.classList.add('boycott-thumbnail');

        const title = document.createElement('h3');
        title.textContent = boycott.name;

        const description = document.createElement('p');
        description.textContent = boycott.description;

        const boycottInfo = document.createElement('div');
        boycottInfo.classList.add('boycott-info');
        boycottInfo.innerHTML = `
            <span>People Joined: ${boycott.peopleJoined}</span>
            <span>Created On: ${new Date(boycott.createdOn).toLocaleDateString()}</span>
        `;

        boycottCard.appendChild(logo);
        boycottCard.appendChild(title);
        boycottCard.appendChild(description);
        boycottCard.appendChild(boycottInfo);

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
    const peopleJoined = document.getElementById('boycott-joined').value;
    const createdOn = document.getElementById('boycott-created-on').value;

    const newBoycott = {
        logo: imageUrl,
        name: title,
        description: description,
        id: boycottData.length + 1,
        peopleJoined: peopleJoined,
        createdOn: createdOn
    };

    boycottData.push(newBoycott);
    loadBoycotts();

    // Close the modal and reset form
    modal.style.display = "none";
    this.reset();
});
