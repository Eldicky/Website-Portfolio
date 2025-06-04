function openImageModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modal.classList.add("active");
  modalImg.src = img.src;
  modalImg.alt = img.alt;

  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");

  // Restore body scroll
  document.body.style.overflow = "auto";
}

// Close modal when pressing Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeImageModal();
  }
});
