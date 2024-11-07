// Array of objects to store talent data for each experience level
const experienceLevels = [
  {
    level: "Entry-level",
    localJobOpenings: 5,
    availableTalent: 50
  },
  {
    level: "Mid-level",
    localJobOpenings: 15,
    availableTalent: 30
  },
  {
    level: "Senior-level",
    localJobOpenings: 25,
    availableTalent: 10
  }
];

// Function to display talent data for each experience level
function displayTalentData(data) {
  // Reference to the HTML container where data will be displayed
  const talentDataContainer = document.getElementById('talent-data');
  
  // Variable to keep track of total job openings
  let totalJobOpenings = 0;

  // Loop through each experience level object in the array
  data.forEach(item => {
    // Create a new div for each experience level
    const levelDiv = document.createElement('div');
    levelDiv.classList.add('experience-level');

    // Display experience level, job openings, and available talent
    const levelContent = `
      <h2>Experience Level: ${item.level}</h2>
      <p>Job Openings: ${item.localJobOpenings}</p>
      <p>Available Talent: ${item.availableTalent}</p>
    `;
    levelDiv.innerHTML = levelContent;
    
    // Append the level div to the main container
    talentDataContainer.appendChild(levelDiv);

    // Add to the total job openings count
    totalJobOpenings += item.localJobOpenings;
  });

  // Display the total job openings across all levels
  const totalOpeningsDiv = document.getElementById('total-job-openings');
  totalOpeningsDiv.textContent = `Total Job Openings across all levels: ${totalJobOpenings}`;
}

// Call the function with the experience levels data
displayTalentData(experienceLevels);