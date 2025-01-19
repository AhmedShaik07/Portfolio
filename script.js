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