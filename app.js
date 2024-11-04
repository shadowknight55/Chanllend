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
  data.forEach(item => {
    console.log(`Experience Level: ${item.level}`);
    console.log(`Job Openings: ${item.localJobOpenings}`);
    console.log(`Available Talent: ${item.availableTalent}\n`);
  });
}

// Call the function with the experience levels data
displayTalentData(experienceLevels);