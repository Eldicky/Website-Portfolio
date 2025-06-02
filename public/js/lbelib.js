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
  student: {
    folder: "student",
    title: "Student Side User Interface",
    contents: [
      {
        title: "Login Page",
        img: "login-page",
      },
      {
        title: "Request Account",
        img: "login-request-account",
      },
      {
        title: "Forgot Password",
        img: "login-forget-password",
      },
      {
        title: "Home Page",
        img: "home-page",
      },
      {
        title: "Notification",
        img: "website-notification",
      },
      {
        title: "Sidebar Expanded",
        img: "sidebar-expanded",
      },
      {
        title: "Top Viewed Books",
        img: "home-page-2",
      },
      {
        title: "Book Details",
        img: "book-detail",
      },
      {
        title: "Book Borrow Request",
        img: "book-borrow-request",
      },
      {
        title: "Borrow Already Requested",
        img: "book-borrow-already-requested",
      },
      {
        title: "Book Preview",
        img: "book-preview",
      },
      {
        title: "Bookmark Book",
        img: "bookmark-book",
      },
      {
        title: "Remove Bookmark",
        img: "remove-bookmark",
      },
      {
        title: "Bookmark Page",
        img: "bookmark-page",
      },
      {
        title: "Change Password",
        img: "change-password",
      },
      {
        title: "Borrowed Books Page",
        img: "borrowed-books-page",
      },
      {
        title: "Request History - Pending",
        img: "request-history-pending",
      },
      {
        title: "Request History - Approved",
        img: "request-history-approved",
      },
      {
        title: "Request History - Declined",
        img: "request-history-declined",
      },
      {
        title: "Logout Page",
        img: "logout",
      },
    ],
  },
  librarian: {
    folder: "librarian",
    title: "Analytics Dashboard",
    contents: [
      {
        title: "Home Page",
        img: "home-page",
      },
      {
        title: "Upload Page",
        img: "upload-page",
      },
      {
        title: "Books Page",
        img: "books-page",
      },
      {
        title: "Book Preview",
        img: "books-preview",
      },
      {
        title: "Edit Book",
        img: "edit-book",
      },
      {
        title: "Archive Book",
        img: "archive-book",
      },
      {
        title: "Books to be Returned",
        img: "book-status-books-to-be-returned",
      },
      {
        title: "Book Returned",
        img: "books-to-be-returned-book-returned",
      },
      {
        title: "Return Book Reminder",
        img: "books-to-be-returned-remind",
      },
      {
        title: "Book Logs",
        img: "book-status-logs",
      },
      {
        title: "Borrow Requests Page",
        img: "borrow-request-pending-requests",
      },
      {
        title: "Approve Borrow Request",
        img: "pending-request-approve-request",
      },
      {
        title: "Decline Borrow Request",
        img: "pending-request-decline-request",
      },
      {
        title: "Approved Borrow Requests",
        img: "borrow-request-approved-requests",
      },
      {
        title: "Declined Borrow Request",
        img: "borrow-request-declined-requests",
      },
      {
        title: "Archived Books Page",
        img: "archived-books-page",
      },
      {
        title: "Restore Archived Book",
        img: "archived-books-restore",
      },
    ],
  },
  admin: {
    folder: "admin",
    title: "Task Management Board",
    contents: [
      {
        title: "Overview",
        img: "overview",
      },
      {
        title: "Activity Logs",
        img: "activity-logs",
      },
      {
        title: "User List",
        img: "user-list",
      },
      {
        title: "Disable User",
        img: "user-list-disable-account",
      },
      {
        title: "Create Account",
        img: "create-account",
      },
      {
        title: "Import Multiple Users from CSV",
        img: "import-multiple-accounts-using-csv",
      },
      {
        title: "Book Batch Upload",
        img: "book-batch-upload",
      },
    ],
  },
};

function openModal(cardType) {
  const modal = document.getElementById("galleryModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  const data = modalData[cardType];
  const imgPath = `/public/img/lbelib/${data.folder}/`;
  modalTitle.textContent = data.title;

  // Generate modal content
  let contentHTML = '<div class="grid gap-3 sm:gap-10">';

  data.contents.forEach((content) => {
    contentHTML += `
            <div class="bg-darker-blue rounded-xl p-6 border border-gray-700">
                <div class="items-center">
                    <div class="bg-gradient-to-br from-cyan/10 to-light-cyan/5 rounded-lg p-3 pt-0 pb-0 sm:p-5 border border-gray-600 min-h-[250px] flex flex-col items-center justify-center">
                      <div class="text-center">
                        <h1 class="text-base md:text-2xl font-bold text-gray-200 mb-4">${content.title}</h1>
                      </div>
                      <div>
                          <img src="${imgPath}/${content.img}.png" alt="${content.img}" class="mb-4 rounded-lg shadow-lg">
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
