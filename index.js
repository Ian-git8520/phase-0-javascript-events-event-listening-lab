function addingEventListener() {
  const input = document.querySelector("input");

  input.addEventListener("click", function (event) {
    console.log("clicked");
  });

  const form = document.getElementById("myForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("form submitted");
    });
  }
}

module.exports = { addingEventListener };
