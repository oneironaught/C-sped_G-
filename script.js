document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is ready!");
  });

  document.addEventListener("DOMContentLoaded", function () {
    function fadeIn(element, duration) {
      let opacity = 0; // Start opacity
      const interval = 50; // Time between updates in milliseconds
      const increment = interval / duration; // Increment opacity by this amount per interval
  
      // Ensure element starts hidden
      element.style.opacity = 0;
      element.style.transition = `opacity ${duration}ms ease-in-out`;
  
      const fade = setInterval(() => {
        opacity += increment; // Increment opacity
        element.style.opacity = opacity; // Apply opacity to the element
  
        if (opacity >= 1) {
          // When opacity reaches 1, stop the interval
          clearInterval(fade);
          element.style.opacity = 1; // Ensure final opacity is exactly 1
        }
      }, interval);
    }
  
    // Target elements to fade in
    const elements = document.querySelectorAll("header, section, footer");
  
    elements.forEach((el, index) => {
      // Stagger fade-in by adding a delay based on index
      setTimeout(() => {
        fadeIn(el, 1500); // 1500ms duration for each element
      }, index * 200); // Stagger by 200ms between elements
    });
  });
