// ============== Part 1 ===================
// Select the main element
const mainEl = document.querySelector("main");

// Set the background color to a CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

// Add a header to the main section
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//Give the mainEL a flex centered layout by adding the flex class
mainEl.classList.add("flex-ctr");

// ============= Part 2 =======================
// Grab the top menu <nav> element
const topMenuEl = document.getElementById("top-menu");

// Set the height to 100% so it fills the space
topMenuEl.style.height = "100%";

// Use a CSS variable for the background color
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a "flex-around" class to space items evenly
topMenuEl.classList.add("flex-around");
