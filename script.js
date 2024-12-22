// document.getElementById("revealButton").addEventListener("click", function() {
//     document.getElementById("message").classList.remove("hidden");
//     this.style.display = "none";
//   });

// Initialize GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const revealButton = document.getElementById('revealButton');
    const message = document.getElementById('message');
    const revealTitle = document.getElementById('revealTitle');
    const revealSubtitle = document.getElementById('revealSubtitle');
    const promoImage = document.getElementById('promoImage');
    const revealText = document.getElementById('revealText');
  
    // Intro animation
    gsap.fromTo(
      [title, subtitle],
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  
    // Button click animation
    revealButton.addEventListener('click', () => {
      // Hide button
      gsap.to(revealButton, { opacity: 0, duration: 0.5 });
  
      // Reveal the message
      message.classList.remove('hidden');
  
      // Animate the message elements
      gsap.fromTo(
        revealTitle,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
      );
      gsap.fromTo(
        revealSubtitle,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.8 }
      );
      gsap.fromTo(
        promoImage,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 1.1 }
      );
      gsap.fromTo(
        revealText,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, delay: 1.4 }
      );
    });
  });