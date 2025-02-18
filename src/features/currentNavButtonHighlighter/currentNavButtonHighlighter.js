// currentNavButtonHighlighter.js

// Initialize current nav button highlighter
export const currentNavButtonHighlighter = () => {
  const pageSections = document.querySelectorAll("main > div"); // ERROR CHANGED TO div from section based on w3 html validation warning
  const navButtons = document.querySelectorAll("nav li");

  window.addEventListener("scroll", () =>
    changeCurrent(pageSections, navButtons),
  );
  window.addEventListener("hashchange", () =>
    changeCurrent(pageSections, navButtons),
  );
};

// Change the current button based on the scroll position
function changeCurrent(pageSections, navButtons) {
  const viewLocation = window.scrollY;

  // Runs the code for every section
  pageSections.forEach((section, index) => {
    if (index === 1 || index === 2) return;
    const sectionTop = section.offsetTop - 10; // the number for header height
    const sectionBottom = calculateSectionBottom(section, index);

    // If the section is in view, it removes 'current' class from every button and adds it to the one that matches the section
    if (viewLocation > sectionTop && viewLocation < sectionBottom) {
      updateNavButtons(navButtons, section);
    }
  });
}

// Calculate the section bottom based on the index
function calculateSectionBottom(section, index) {
  return index > 0
    ? section.offsetTop + section.offsetHeight
    : section.offsetTop +
        section.offsetHeight +
        document.getElementById("home-rest").offsetHeight;
}

// Update nav buttons by adding the 'current' class to the matching one
function updateNavButtons(navButtons, section) {
  navButtons.forEach((button) => {
    button.classList.remove("current");

    const buttonHref = button.firstElementChild
      .getAttribute("href")
      .replace("#", "");

    if (section.id === buttonHref) {
      button.classList.add("current");
      history.replaceState(null, null, `#${section.id}`);
    }
  });
}
