// Get the boycott ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const boycottId = urlParams.get('id');

// Sample boycott data for dynamic loading (same as in the main page)
const boycottData = [
    {
        logo: "https://via.placeholder.com/150",
        name: "Boycott Brand A",
        description: "This boycott is about environmental issues surrounding Brand A.",
        id: 1
    },
    {
        logo: "https://via.placeholder.com/150",
        name: "Boycott Company X",
        description: "Company X is involved in labor rights violations.",
        id: 2
    },
    {
        logo: "https://via.placeholder.com/150",
        name: "Boycott Tech Giant Z",
        description: "Boycotting Tech Giant Z for monopolistic practices.",
        id: 3
    }
];

// Find the corresponding boycott by ID
const selectedBoycott = boycottData.find(boycott => boycott.id == boycottId);

// Load boycott data into the page
const boycottInfoDiv = document.getElementById('boycott-info');

if (selectedBoycott) {
    boycottInfoDiv.innerHTML = `
        <h1>${selectedBoycott.name}</h1>
        <img src="${selectedBoycott.logo}" alt="${selectedBoycott.name}">
        <p>${selectedBoycott.description}</p>
    `;
} else {
    boycottInfoDiv.innerHTML = "<p>Boycott not found.</p>";
}
