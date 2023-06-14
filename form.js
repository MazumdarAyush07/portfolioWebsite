const scriptURL =
  "https://script.google.com/macros/s/AKfycbzP-7agrdlFouQy12MzoIjZiTeZKT6vMC0FlFKpzbiAGRW6ZxqnlZU9ynKybfp4W4Y/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(
      (response) =>
        function () {
          console.log("Success!", response);
          form.reset();
        }
    )
    .catch((error) => console.error("Error!", error.message));
});

function confirmation() {
  alert("Response Successfully Submitted");
}
