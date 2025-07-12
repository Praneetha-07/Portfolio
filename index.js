document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar Toggle Logic ---
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navLinksMenu = document.getElementById("nav-links-menu");

  if (mobileMenuButton && navLinksMenu) {
    mobileMenuButton.addEventListener("click", () => {
      navLinksMenu.classList.toggle("active");
      mobileMenuButton.classList.toggle("is-active");
    });

    navLinksMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinksMenu.classList.contains("active")) {
          navLinksMenu.classList.remove("active");
          mobileMenuButton.classList.remove("is-active");
        }
      });
    });
  }

  // --- Smooth Scroll for Internal Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // --- Scroll to Top Button Logic ---
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = "flex";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });

    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- Contact Form Submission Logic ---
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      console.log("Form submitted!");
      console.log("Name:", document.getElementById("name").value);
      console.log("Email:", document.getElementById("email").value);
      console.log("Message:", document.getElementById("message").value);

      alert("Message sent successfully!");

      contactForm.reset();
    });
  }
});
