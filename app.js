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
  const talentDataContainer = document.getElementById('talent-data');
  let totalJobOpenings = 0;

  data.forEach(item => {
    const levelDiv = document.createElement('div');
    levelDiv.classList.add('experience-level');
    
    const levelContent = `
      <h2>Experience Level: ${item.level}</h2>
      <p>Job Openings: ${item.localJobOpenings}</p>
      <p>Available Talent: ${item.availableTalent}</p>
    `;
    levelDiv.innerHTML = levelContent;
    
    talentDataContainer.appendChild(levelDiv);
    totalJobOpenings += item.localJobOpenings;
  });

  const totalOpeningsDiv = document.getElementById('total-job-openings');
  totalOpeningsDiv.textContent = `Total Job Openings across all levels: ${totalJobOpenings}`;
}

// Function to find the experience level with the highest gap between job openings and available talent
function findLargestOpeningsShortage(data) {
  let maxGap = 0;
  let levelWithMaxGap = '';

  data.forEach(item => {
    const gap = item.localJobOpenings - item.availableTalent;
    if (gap > maxGap) {
      maxGap = gap;
      levelWithMaxGap = item.level;
    }
  });

  return { level: levelWithMaxGap, gap: maxGap };
}

// Function to display the experience level with the largest shortage on the HTML page
function displayLargestShortage(data) {
  const shortageData = findLargestOpeningsShortage(data);
  const shortageContainer = document.getElementById('largest-shortage');
  
  // Display the level with the largest gap and its gap value
  shortageContainer.innerHTML = `
    <h2>Largest Job Shortage</h2>
    <p>Experience Level: ${shortageData.level}</p>
    <p>Gap Value: ${shortageData.gap}</p>
  `;
}

// Call the functions to display data on the HTML page
displayTalentData(experienceLevels);
displayLargestShortage(experienceLevels);
