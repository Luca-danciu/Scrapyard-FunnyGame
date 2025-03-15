const video = document.querySelector(".background-video");

// Function to play the video in reverse
function playInReverse() {
  // Set the initial time to the end of the video
  video.currentTime = video.duration;

  // Define the reverse playback function
  function reverse() {
    if (video.currentTime <= 0) {
      // Stop the reverse and reset to the beginning
      video.pause();
      video.currentTime = 0;
    } else {
      // Decrease currentTime to play in reverse
      video.currentTime -= 0.04; // Adjust for smooth reverse (about 25fps)
      // Call the reverse function on the next frame
      requestAnimationFrame(reverse);
    }
  }

  // Start the reverse playback
  requestAnimationFrame(reverse);
}

// Listen for the 'ended' event on the video element
video.addEventListener("ended", function () {
  video.pause(); // Pause the video once it ends
  playInReverse(); // Call the function to play it in reverse
});

// Optional: Listen for 'play' event to reset normal playback if needed
video.addEventListener("play", function () {
  // You can clear any reverse intervals or animations if you plan to play normally
  video.playbackRate = 1; // Set playback to normal speed
});

// Countdown Timer Logic
const targetDate = new Date("March 20, 2025 01:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Set the timer text with glitch effect
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Apply glitch effect (using data-text for glitch)
  document.getElementById("days").setAttribute("data-text", days);
  document.getElementById("hours").setAttribute("data-text", hours);
  document.getElementById("minutes").setAttribute("data-text", minutes);
  document.getElementById("seconds").setAttribute("data-text", seconds);

  // If the countdown is over, display a message
  if (distance <= 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").innerHTML = "The time has come!";
  }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
