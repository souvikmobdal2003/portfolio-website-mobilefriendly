let text = "Full-Stack Web Developer "; // Text to display
let index = 0; // Start index

function typeEffect() {
  if (index < text.length) {
    document.getElementById("skill").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Type the next character
  } else {
    setTimeout(() => {
      document.getElementById("skill").textContent = ""; // Clear the text
      index = 0; // Reset the index
      typeEffect(); // Restart the typing effect
    }, 1000); // Pause for a moment before restarting
  }
}

// Start the typing effect
typeEffect();

// Open popup for each skill
document.querySelectorAll('.open-button').forEach(button => {
    button.addEventListener('click', function () {
      const popupId = button.id.replace('open-', 'openpop-');
      document.getElementById(popupId).classList.add('active');
    });
  });
  
  // Close popup for each skill
  document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function () {
      button.closest('.popup-main').classList.remove('active');
    });
  });

  document.addEventListener("scroll", () => {
    const contents = document.querySelectorAll(".content");
    
    contents.forEach((valu, index) => {
      setTimeout(() => {
        valu.classList.add("appear"); 
      }, index * 300); 
    });
  });
  
  
