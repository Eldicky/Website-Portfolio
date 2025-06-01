function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

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

    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Add scroll effect to navigation
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("bg-darker-blue", "bg-opacity-95", "backdrop-blur-sm");
  } else {
    nav.classList.remove("bg-darker-blue", "bg-opacity-95", "backdrop-blur-sm");
  }
});

// Modal data for each gallery item
const modalData = {
  mainMenu: {
    title: "Main Menu Interface",
    images: [
      {
        title: "Navigation Overview",
        description: "Clean and intuitive main navigation with quick access to all features",
        placeholder: "Main navigation interface with sidebar menu, search bar, and user profile section",
      },
      {
        title: "Menu Categories",
        description: "Organized menu categories for easy navigation between different sections",
        placeholder: "Categorized menu items including Tasks, Projects, Teams, and Analytics",
      },
      {
        title: "User Dashboard",
        description: "Personalized dashboard showing recent activities and quick actions",
        placeholder: "User dashboard with recent tasks, notifications, and quick action buttons",
      },
    ],
  },
  dashboard: {
    title: "Analytics Dashboard",
    images: [
      {
        title: "Performance Overview",
        description: "Comprehensive analytics showing productivity metrics and trends",
        placeholder: "Charts and graphs displaying task completion rates, team performance, and project progress",
      },
      {
        title: "Real-time Statistics",
        description: "Live data visualization with interactive charts and reports",
        placeholder: "Real-time dashboard with live updating charts, KPI cards, and progress indicators",
      },
      {
        title: "Custom Reports",
        description: "Generate custom reports based on specific timeframes and criteria",
        placeholder: "Report generation interface with filters, date ranges, and export options",
      },
    ],
  },
  taskBoard: {
    title: "Task Management Board",
    images: [
      {
        title: "Kanban Board View",
        description: "Intuitive drag-and-drop task management with customizable columns",
        placeholder: "Kanban board with To Do, In Progress, Review, and Done columns with task cards",
      },
      {
        title: "Task Details",
        description: "Detailed task information with attachments, comments, and due dates",
        placeholder: "Task detail modal showing description, assignees, due dates, and file attachments",
      },
      {
        title: "Team Collaboration",
        description: "Real-time collaboration features with team member interactions",
        placeholder: "Task board showing team member avatars, real-time updates, and collaboration indicators",
      },
    ],
  },
  teamChat: {
    title: "Team Communication Hub",
    images: [
      {
        title: "Chat Interface",
        description: "Modern messaging interface with channels and direct messages",
        placeholder: "Chat interface with channel list, message threads, and emoji reactions",
      },
      {
        title: "File Sharing",
        description: "Seamless file sharing and collaboration within chat conversations",
        placeholder: "Chat with file uploads, image previews, and document sharing capabilities",
      },
      {
        title: "Video Integration",
        description: "Integrated video calls and screen sharing for remote collaboration",
        placeholder: "Video call interface embedded within the chat application",
      },
    ],
  },
  settings: {
    title: "Configuration Panel",
    images: [
      {
        title: "User Preferences",
        description: "Personalized settings for notifications, themes, and user preferences",
        placeholder: "Settings panel with theme selection, notification preferences, and account settings",
      },
      {
        title: "Team Management",
        description: "Administrative controls for team management and permissions",
        placeholder: "Team management interface with user roles, permissions, and access controls",
      },
      {
        title: "Integration Settings",
        description: "Third-party integrations and API configurations",
        placeholder: "Integration settings showing connected apps, API keys, and webhook configurations",
      },
    ],
  },
};

function openModal(cardType) {
  const modal = document.getElementById("galleryModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  const data = modalData[cardType];
  modalTitle.textContent = data.title;

  // Generate modal content
  let contentHTML = '<div class="grid gap-8">';

  data.images.forEach((image, index) => {
    contentHTML += `
            <div class="bg-darker-blue rounded-xl p-6 border border-gray-700">
                <div class="grid lg:grid-cols-2 gap-6 items-center">
                    <div class="bg-gradient-to-br from-cyan/10 to-light-cyan/5 rounded-lg p-8 border border-gray-600 min-h-[250px] flex items-center justify-center">
                        <div class="text-center text-gray-400">
                            <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <p class="text-sm">${image.placeholder}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-xl font-semibold text-white mb-3">${image.title}</h4>
                        <p class="text-gray-300 leading-relaxed mb-4">${image.description}</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-cyan/20 text-cyan px-3 py-1 rounded-full text-sm">Feature ${index + 1}</span>
                            <span class="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm">Interactive</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  contentHTML += "</div>";
  modalContent.innerHTML = contentHTML;

  // Show modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeModal() {
  const modal = document.getElementById("galleryModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside the content
document.getElementById("galleryModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

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

// Navigation scroll behavior
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

  // Active navigation link highlighting
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
});

// Basic carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// Auto-advance carousel every 4 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Arrow navigation for carousel
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel-container .absolute.left-4");
  const nextButton = document.querySelector(".carousel-container .absolute.right-4");

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
});
