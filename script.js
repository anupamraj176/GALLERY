const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.getElementById("closeModal");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const videoUrl = card.querySelector(".video-url").textContent;
    videoFrame.src = videoUrl;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  videoFrame.src = ""; 
});

// Close modal when clicking outside the modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    videoFrame.src = "";
  }
});

// Tag Filtering
const tagButtons = document.querySelectorAll(".tag-btn");
const galleryCards = document.querySelectorAll(".card");

tagButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedTag = button.getAttribute("data-tag");

    galleryCards.forEach(card => {
      const cardTags = card.getAttribute("data-tags").split(" ");
      if (selectedTag === "All" || cardTags.includes(selectedTag)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Update active button style
    tagButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('.card-video');
  if (video) {
    card.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();
    });
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});