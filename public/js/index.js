// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Form submission (placeholder functionality)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("Message sent successfully! I'll get back to you soon.");
    this.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".card-hover, .skill-bar").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

// Mobile menu toggle (basic implementation)
const mobileMenuBtn = document.querySelector(".md\\:hidden button");
const navLinks = document.querySelector(".md\\:flex");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    // This would toggle mobile menu in a real implementation
    console.log("Mobile menu toggle clicked");
  });
}

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector("#home .absolute");
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add typing effect restart on scroll
const typingElement = document.querySelector(".typing-animation");
if (typingElement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "none";
        entry.target.offsetHeight; // Trigger reflow
        entry.target.style.animation = "typing 3s steps(40, end), blink-caret 0.75s step-end infinite";
      }
    });
  });
  observer.observe(typingElement);
}
// Add this JavaScript to your existing script section (REPLACE the existing scroll event listener)

// Navigation scroll behavior - REPLACE your existing window.addEventListener('scroll') with this:
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("nav-links");

  // Navigation icon/text toggle
  if (scrollTop <= 50) {
    // At top - show full navigation
    if (navbar) navbar.classList.remove("nav-scrolled");
    if (navLinks) navLinks.classList.remove("nav-scrolled");
  } else {
    // Scrolled down - show icon-only navigation
    if (navbar) navbar.classList.add("nav-scrolled");
    if (navLinks) navLinks.classList.add("nav-scrolled");
  }

  // Active navigation link highlighting (existing functionality)
  const sections = document.querySelectorAll("section[id]");
  const navLinksElements = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollTop >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinksElements.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  // Parallax effect (existing functionality)
  const parallax = document.querySelector("#home .absolute");
  if (parallax) {
    parallax.style.transform = `translateY(${scrollTop * 0.5}px)`;
  }
});
