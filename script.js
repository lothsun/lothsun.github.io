document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    this.style.display = "none";
  });