let fieldset = document.querySelectorAll("fieldset");

fieldset.forEach(field => {
    field.addEventListener("mouseover", () => {
        field.style.color="black";
        field.style.backgroundColor="white";
    });
    field.addEventListener("mouseout", () => {
        field.style.color = "";                // Revert to default text color
        field.style.backgroundColor = "";      // Revert to default background color
      });
});

let projects = document.querySelectorAll(".projects");

projects.forEach(project => {
    project.addEventListener("mouseover", () => {
        project.style.color="black";
        project.style.backgroundColor="white";
        project.style.backgroundColor.opacity=0.5;
    });
    project.addEventListener("mouseout", () => {
        project.style.color="";
        project.style.backgroundColor="";
    })
})