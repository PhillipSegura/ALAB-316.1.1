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

// ============ Part 3 =====================
// This is our menu data
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Loop over each link in menuLinks
menuLinks.forEach((link) => {
  const linkEl = document.createElement("a"); // Create a new link
  linkEl.href = link.href; // Set the link's URL
  linkEl.textContent = link.text; // Set the link's text

  topMenuEl.appendChild(linkEl); // Add the link to the top menu
});

// ============== 316.3.1 ============

// ============== Part 1 =============
/* Reviewed preivious code and see if anything would like to be changed. Since everything in the code is to my liking we continue */
