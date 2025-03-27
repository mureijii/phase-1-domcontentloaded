// Your code goes here
// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  
    // Select the paragraph element with id="text"
    const paragraph = document.getElementById("text");
  
    // Update the text content of the paragraph
    paragraph.textContent = "This is really cool!";
  });
  
  // This console log will fire immediately when index.js is loaded
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  