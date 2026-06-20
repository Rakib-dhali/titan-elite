const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").className = "fa-solid fa-bars";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const parentItem = this.parentElement;
      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("active");
        }
      });
      parentItem.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nameVal = document.getElementById("name").value;

            alert(`Thank you, ${nameVal}! Your message has been routed to the Titan Elite staff.`);
            
            contactForm.reset();
        });
    }
});