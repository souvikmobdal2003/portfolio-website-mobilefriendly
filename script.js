
    document.addEventListener("DOMContentLoaded", function () {
        let navLinks = document.querySelectorAll(".close-offcanvas");
        let offcanvasNavbar = document.getElementById("offcanvasNavbar");

        navLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent instant jumping
                let targetId = this.getAttribute("href"); // Get section ID
                let targetSection = document.querySelector(targetId);

                if (targetSection) {
                    let offcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
                    offcanvas.hide(); // Close the offcanvas menu

                    // Wait for the menu to close, then scroll smoothly
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: "smooth" });
                    }, 300); // Delay to ensure menu is fully closed
                }
            });
        });
    });



    let text = "Full-Stack Developer "; // Text to display
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
        }, 1000); // Pause before restarting
      }
    }
  
    // Start the typing effect
    typeEffect();

  

//project section //
document.addEventListener("DOMContentLoaded", function() {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content, index) => {
      setTimeout(() => {
          content.style.opacity = "1";
          content.style.transform = "translateY(0)";
      }, index * 300);
  });
  
  const showMoreBtn = document.getElementById("showMoreBtn");
  const moreProjects = document.querySelector(".more-projects");
  
  showMoreBtn.addEventListener("click", function() {
      moreProjects.style.display = "block";
      showMoreBtn.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.querySelector(".btn_show");
  const hiddenProjects = document.querySelectorAll(".content:nth-child(n+5)");
  
  let isExpanded = false;

  showMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!isExpanded) {
      hiddenProjects.forEach(project => project.style.display = "block");
      showMoreBtn.innerHTML = "Show Less";
    } else {
      hiddenProjects.forEach(project => project.style.display = "none");
      showMoreBtn.innerHTML = "Want to Show More ?";
    }
    isExpanded = !isExpanded;
  });
});


$(document).ready(function () {
        $(window).on('scroll', function () {
            $('.fade-in').each(function () {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
                if (elementTop < windowBottom - 50) {
                    $(this).addClass('show');
                }
            });

            $('.fade-in-left').each(function () {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
                if (elementTop < windowBottom - 50) {
                    $(this).addClass('show-left');
                }
            });

            $('.fade-in-right').each(function () {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
                if (elementTop < windowBottom - 50) {
                    $(this).addClass('show-right');
                }
            });
        });
    });


   // feedback//
   function submitFeedback(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comments = document.getElementById("comments").value;
    
    if(name === "" || email === "" || comments === "") {
        alert("Please fill in all fields before submitting.");
    } else {
        alert("Thank you for your feedback, " + name + "!");
        document.getElementById("feedbackForm").reset();
        resetStars();
    }
}

function rateStar(star) {
    let stars = document.querySelectorAll(".star");
    stars.forEach((s, index) => {
        if (index < star) {
            s.classList.add("text-warning");
        } else {
            s.classList.remove("text-warning");
        }
    });
    document.getElementById("rating").value = star;
}

function resetStars() {
    let stars = document.querySelectorAll(".star");
    stars.forEach(s => s.classList.remove("text-warning"));
}


//adress//
function copyEmail() {
  var emailText = "mondaksouvik289@gmail.com";
  navigator.clipboard.writeText(emailText);
  alert("Email copied: " + emailText);
}
function updateGreeting() {
  var hours = new Date().getHours();
  var greeting;
  if (hours < 12) {
      greeting = "Good Morning!";
  } else if (hours < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }
  document.getElementById("greeting").innerText = greeting;
}
updateGreeting();