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
    return;
  }

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
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

// Rate limiting variables
let lastSubmissionTime = 0;
const RATE_LIMIT_DELAY = 5000; // 1 minute in milliseconds

// Modal functions
function showModal() {
  const modal = document.getElementById("messageModal");
  const content = document.getElementById("modalContent");

  modal.classList.remove("hidden");
  setTimeout(() => {
    content.classList.remove("scale-95", "opacity-0");
    content.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("messageModal");
  const content = document.getElementById("modalContent");

  content.classList.remove("scale-100", "opacity-100");
  content.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

function showErrorModal(message) {
  const modal = document.getElementById("errorModal");
  const content = document.getElementById("errorModalContent");
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = message;
  modal.classList.remove("hidden");
  setTimeout(() => {
    content.classList.remove("scale-95", "opacity-0");
    content.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeErrorModal() {
  const modal = document.getElementById("errorModal");
  const content = document.getElementById("errorModalContent");

  content.classList.remove("scale-100", "opacity-100");
  content.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

function showRateLimitModal() {
  const modal = document.getElementById("rateLimitModal");
  const content = document.getElementById("rateLimitModalContent");

  modal.classList.remove("hidden");
  setTimeout(() => {
    content.classList.remove("scale-95", "opacity-0");
    content.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeRateLimitModal() {
  const modal = document.getElementById("rateLimitModal");
  const content = document.getElementById("rateLimitModalContent");

  content.classList.remove("scale-100", "opacity-100");
  content.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

// Enhanced email validation function
function isValidEmail(email) {
  // More comprehensive email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

// Form submission handler
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Check rate limiting
  const currentTime = Date.now();
  if (currentTime - lastSubmissionTime < RATE_LIMIT_DELAY) {
    showRateLimitModal();
    return;
  }

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();

  // Validation
  if (!name || name.length < 2) {
    showErrorModal("Please enter a valid name (at least 2 characters).");
    return;
  }

  if (!email) {
    showErrorModal("Please enter an email address.");
    return;
  }

  if (!isValidEmail(email)) {
    showErrorModal("Please enter a valid email address (e.g., example@domain.com).");
    return;
  }

  if (!subject || subject.length < 3) {
    showErrorModal("Please enter a subject (at least 3 characters).");
    return;
  }

  if (!message || message.length < 10) {
    showErrorModal("Please enter a more detailed message (at least 10 characters).");
    return;
  }

  // Update button state
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
  submitBtn.disabled = true;

  try {
    // Send email using EmailJS
    const result = await emailjs.send(
      "service_lsx3t0i", // Your EmailJS service ID
      "template_f829im5", // Your EmailJS template ID
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "pierreaves@email.com",
      }
    );

    // Success
    lastSubmissionTime = currentTime;
    setTimeout(() => {
      this.reset();

      // Select the submit button again in case it's lost
      const btn = document.querySelector('form button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send Message';
      btn.disabled = false;
    }, 1000);

    showModal();
  } catch (error) {
    console.error("Error sending message:", error);
    showErrorModal("Failed to send message. Please try again or contact me directly at pierreaves@email.com");
  } finally {
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Close modals when clicking outside of them
document.addEventListener("click", function (e) {
  if (e.target.id === "messageModal") {
    closeModal();
  }
  if (e.target.id === "errorModal") {
    closeErrorModal();
  }
  if (e.target.id === "rateLimitModal") {
    closeRateLimitModal();
  }
});

// Close modals with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
    closeErrorModal();
    closeRateLimitModal();
  }
});
