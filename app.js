
// Array of objects to store talent data for each experience level
const experienceLevels = [
  {
    level: "Entry-level",
    localJobOpenings: 15,
    availableTalent: 50
  },
  {
    level: "Mid-level",
    localJobOpenings: 10,
    availableTalent: 30
  },
  {
    level: "Senior-level",
    localJobOpenings: 5,
    availableTalent: 10
  }
];
// Function to display talent data and calculate the talent gap
function displayTalentData(data) {
    data.forEach(item => {
      const talentGap = item.localJobOpenings - item.availableTalent;
      console.log(`Experience Level: ${item.level}`);
      console.log(`Job Openings: ${item.localJobOpenings}`);
      console.log(`Available Talent: ${item.availableTalent}`);
      console.log(`Talent Gap: ${talentGap}\n`);
    });
  }
  
  // Call the function with the experience levels data
  displayTalentData(experienceLevels);