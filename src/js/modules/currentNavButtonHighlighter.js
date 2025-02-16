//current nav button - start:
export const currentNavButtonHighlighter = () => {
  const pageSections = document.querySelectorAll("main > div"); // ERROR CHANGED TO div from section based on w3 html validation warning
  const navButtons = document.querySelectorAll("nav li");

  const changeCurrent = () => {
    const viewLocation = window.scrollY;
    //runs the code for every section
    pageSections.forEach((section, index) => {
      if (index === 1 || index === 2) return; //ERROR was not added
      const sectionTop = section.offsetTop - 10; // the number for header height
      const sectionBottom =
        index > 0 //the first section is in 2 containers
          ? sectionTop + section.offsetHeight
          : sectionTop +
            section.offsetHeight +
            document.getElementById("home-rest").offsetHeight;

      //if the section is in view, it removes 'current' class from every button and the add it to the one that matches the section
      if (viewLocation > sectionTop && viewLocation < sectionBottom) {
        navButtons.forEach((button) => {
          button.classList.remove("current");

          const buttonHref = button.firstElementChild
            .getAttribute("href")
            .replace("#", "");

          if (section.id === buttonHref) {
            button.classList.add("current");
          }
        });
      }
    });
  };
  window.addEventListener("scroll", changeCurrent);
  window.addEventListener("hashchange", changeCurrent);
};
/*end - current nav button*/
