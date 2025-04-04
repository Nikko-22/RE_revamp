const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".mobile-menu a"); // Select all menu links
const closeMenuBtn = document.querySelector(".Inquire__button"); // Ensure button is selected
const header = document.getElementById("header");

function toggleMenu() {
  menuIcon.classList.toggle("active"); // Toggle X animation
  mobileMenu.classList.toggle("active"); // Toggle menu visibility
}

// Clicking the menu icon opens/closes the menu
menuIcon.addEventListener("click", toggleMenu);

// Clicking any menu link closes the menu and scrolls to section
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = link.getAttribute("href");
    if (target.startsWith("#")) {
      e.preventDefault(); // Prevent default jump
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      }
    }

    // Close the menu only if it is currently open
    if (mobileMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});

// Prevent the "Inquire" button from toggling the menu
if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Stop event from bubbling up
  });
}

// JavaScript for Scroll Logic
let lastScrollPosition = 0;
const scrollThreshold = 10; // Prevents flickering when slightly scrolling

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (Math.abs(currentScrollPosition - lastScrollPosition) > scrollThreshold) {
    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down - hide the header
      header.classList.add("hidden");
    } else {
      // Scrolling up - show the header
      header.classList.remove("hidden");
    }
    lastScrollPosition = currentScrollPosition;
  }
});
