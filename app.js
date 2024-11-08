

// Array of objects to store talent data for each experience level
  const experienceLevels = [
      { level: "Entry-level", localJobOpenings: 500_00, availableTalent: 200_00 },   // Gap: 30,000
      { level: "Mid-level", localJobOpenings: 150_000, availableTalent: -500_00 },   // Gap: 200,000
      { level: "Senior-level", localJobOpenings: 100_000, availableTalent: 700_00 }  // Gap: 30,000
  ];
  

// Function to display talent data and the largest shortage
function displayTalentData(data) {
  const talentDataContainer = document.getElementById('talent-data');
  const totalOpeningsDiv = document.getElementById('total-job-openings');
  const shortageContainer = document.getElementById('largest-shortage');

  let totalJobOpenings = 0;
  let maxGap = 0;
  let largestShortage = '';

  // Loop to create content for each experience level and calculate total openings and shortage
  data.forEach(({ level, localJobOpenings, availableTalent }) => {
    // Append data for each level
    talentDataContainer.innerHTML += `
      <div class="experience-level">
        <h2>Experience Level: ${level}</h2>
        <p>Job Openings: ${localJobOpenings}</p>
        <p>Available Talent: ${availableTalent}</p>
      </div>`;

    // Add to total job openings
    totalJobOpenings += localJobOpenings;

    // Calculate gap and update largest shortage if applicable
    const gap = localJobOpenings - availableTalent;
    if (gap > maxGap) {
      maxGap = gap;
      largestShortage = level;
    }
  });

  // Display total job openings and largest shortage
  totalOpeningsDiv.textContent = `Total Job Openings across all levels: ${totalJobOpenings}`;
  shortageContainer.innerHTML = `
    <h2>Largest Job Shortage</h2>
    <p>Experience Level: ${largestShortage}</p>
    <p>Gap Value: ${maxGap}</p>`;
}

// Call the function to display data on the HTML page
displayTalentData(experienceLevels);
