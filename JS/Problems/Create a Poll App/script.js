let bu = document.getElementById("Submit");

bu.addEventListener("click", () => {

     let choice = document.querySelector('input[name="options"]:checked');
     let p = document.createElement("p");
     document.body.append(p);

     if (choice) {
          p.textContent = choice.value;
          choice.checked = false;
     } else {
          p.textContent = "No option selected.";
     }
     
});
