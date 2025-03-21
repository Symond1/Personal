var config = {
  names: ["Vishwas", "Avis"],
  date: "2023/01/01", // Replace with your anniversary date
  lines: [
    "The first time I saw you in class, my heart skipped a beat, and your smile was breathtaking. ❤️🌹",
    "I wanted to tell you how I felt on that same day, but I could not gather the courage at that very moment. 💔",
    "When I finally spoke my heart to you, my world changed in the most beautiful way. 💞",
    "You brought light and color into my life, making it bloom like never before. 🌸❤️",
    "I know I have made mistakes and hurt you more than I ever wanted, but you are my everything. 😔💔❤️‍🩹",
    "With you by my side, I feel I have everything I could ever need, and I am sorry for the pain caused. ❤️🌹",
    "You are the only one I love, the only one I will ever need, and my heart will always belong.",
    "Your Cupid"
  ],
  redirect: {
    url: "romantic.html",
    icon: "./index_files/envlope.png",
    animation: {
      delayAfterText: 2000, // additional 2s after text completes
      entrance: "scale(2) rotate(720deg)",
      hover: "scale(1.2)"
    }
  }
};

// Function to display the envelope after the text animation completes
document.addEventListener("DOMContentLoaded", function () {
  // Calculate total typing duration: 100ms per character (adjust if needed)
  var totalText = config.lines.join('');
  var typingDuration = totalText.length * 100;
  
  // Total delay: typing duration + additional delay after text completes
  var totalDelay = typingDuration + config.redirect.animation.delayAfterText;
  
  setTimeout(() => {
    const envelope = document.createElement("div");
    envelope.innerHTML = `<a href="${config.redirect.url}" style="display: inline-block; transition: transform 0.3s;" onmouseover="this.style.transform='${config.redirect.animation.hover}'" onmouseout="this.style.transform='scale(1)'"><img src="${config.redirect.icon}" alt="Envelope" style="width: 50px; height: 50px;"></a>`;
    envelope.style.position = "fixed";
    envelope.style.bottom = "20px";
    envelope.style.right = "20px";
    envelope.style.transform = config.redirect.animation.entrance;
    document.body.appendChild(envelope);
  }, totalDelay);
});
