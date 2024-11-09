// This is our menu data
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Select the main element
const mainEl = document.querySelector("main");

// Set the background color to a CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement("h1");
h1.innerHTML = "DOM Manipulation";
mainEl.appendChild(h1);

//Give the mainEL a flex centered layout by adding the flex class
mainEl.classList.add("flex-ctr");

//Setting and establishing the top menu elements
// Grab the top menu <nav> element
const topMenuEl = document.getElementById("top-menu");

// Set the height to 100% so it fills the space
topMenuEl.style.height = "100%";

// Use a CSS variable for the background color
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a "flex-around" class to space items evenly
topMenuEl.classList.add("flex-around");

// Select Element Variable
const subMenuEl = document.getElementById("sub-menu");

// Select the height Variable
subMenuEl.style.height = "100%";

// Set background color for Variable
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add flex-around to the Variable
subMenuEl.classList.add("flex-around");

// Establlish for (a)
for (let i = 0; i < menuLinks.length; i++) {
  const a = document.createElement("a");
  a.setAttribute("href", menuLinks[i].href);
  a.textContent = menuLinks[i].text;
  topMenuEl.append(a);
}

// Set the CSS position subMenuEl
subMenuEl.style.position = "absolute";

// Zero out top property
subMenuEl.style.top = "0";

// Establish topMenuLinks Variable
const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

// Delegated and attached 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", aHandler);

// The first line of code of the event listener function should call the event
// object's preventDefault() method.
function aHandler(event) {
  if (event.target.localName !== "a") {
    return;
  } else {
    event.preventDefault();
    console.log(event.target.textContent);
  }
}

// All events load in refresh
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < topMenuLinks.length; i++) {
    const clicked = topMenuLinks[i];
    console.log(clicked);

    clicked.addEventListener("click", function (e) {
      if (!e.target.matches("a")) return;
      //e.target targets a tag
      console.log(e.target);
      //  The event listener should add the active class to the <a> element that was clicked, unless it was
      // already active, in which case it should remove it.
      e.target.classList.toggle("active");
      topMenuLinks.forEach((link) => {
        console.log(link.subLinks);
        if (link !== e.target) {
          link.classList.remove("active"); // 2.  The event listener should remove the active class from each other <a> element
          // in topMenuLinks - whether the active class exists or not.
        }
        const clickedLink = menuLinks.find(
          (link) => link.text == e.target.textContent
        );
        console.log(clickedLink.subLinks);
        if (
          e.target.classList.contains("active") &&
          e.target.innerHTML !== "about"
        ) {
          subMenuEl.style.top = "100%";
          buildSubMenu(clickedLink.subLinks);
        } else {
          subMenuEl.style.top = "0%";
        }
      });
      function buildSubMenu(subLinks) {
        console.log(subLinks);

        // const subMenuEl = document.querySelectorAll("sub-menu")
        console.log(subMenuEl);
        // 1. Clear the current contents of subMenuEl.
        subMenuEl.innerHTML = "";
        // 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
        subLinks.forEach((link) => {
          // a. Create an <a> element.
          const a = document.createElement("a");
          // b. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
          a.setAttribute("href", link.href);
          // c. Set the element's content to the value of the text property of the "link" object.
          a.textContent = link.text;
          // d. Append the new element to the subMenuEl.
          subMenuEl.appendChild(a);
        });
      }
      subMenuEl.addEventListener("click", function (e) {
        e.preventDefault();
        if (!e.target.matches("a")) {
          return;
        }
        console.log(e.target);
        subMenuEl.style.top = "0%";
        topMenuLinks.forEach((link) => {
          link.classList.remove("active");
        });
        h1.textContent = `${e.target.textContent}`;
      });
    });
  }
});

// 1.  The event listener should add the active class to the <a> element that was clicked, unless it was
// already active, in which case it should remove it.
// // Loop over each link in menuLinks
//menuLinks.forEach((link) => {
//const linkEl = document.createElement("a"); // Create a new link
//linkEl.href = link.href; // Set the link's URL
//linkEl.textContent = link.text; // Set the link's text
//topMenuEl.appendChild(linkEl); // Add the link to the top menu

// ============== 316.3.1 ============

// ============== Part 1 =============
/* Reviewed preivious code and see if anything would like to be changed. Since everything in the code is to my liking we continue */

// ============ Part 2 ================
/* Added given code into both index.html and styles.css. */

// ============ Part 3 =================
