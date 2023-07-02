function toggleContent(contentId, buttonId) {
    var content = document.getElementById(contentId);
    var button = document.getElementById(buttonId);
  
    if (content.style.display === "none") {
      content.style.display = "block";
      content.classList.remove("slide-up");
      button.classList.add("clicked");
    } else {
      content.classList.add("slide-up");
      button.classList.remove("clicked");
      setTimeout(function() {
        content.style.display = "none";
        content.classList.remove("slide-up");
      }, 500); // Adjust the delay to match the slide-up animation duration
    }
  }
  