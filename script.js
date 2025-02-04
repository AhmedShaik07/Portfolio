let fieldset = document.querySelectorAll("fieldset");

fieldset.forEach(field => {
    field.addEventListener("mouseover", () => {
        field.style.fontSize =  "1.5em";     
        field.style.color = "white";
        field.style.border="none";

    });
    field.addEventListener("mouseout", () => {
        field.style.fontSize = "1em";                // Revert to default text color
        field.style.color = "";  
        field.style.border="";    // Revert to default background color
      });
});

let projects = document.querySelectorAll(".projects");

projects.forEach(project => {
    project.addEventListener("mouseover", () => {
        project.style.color="white";
    });
    project.addEventListener("mouseout", () => {
        project.style.color="";
        project.style.backgroundColor="";
       
        
    });
})