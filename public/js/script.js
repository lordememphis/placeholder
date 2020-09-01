const cancel = Array.from(document.querySelectorAll(".cancel"));

cancel.forEach((c) => {
  c.addEventListener("click", (e) => {
    document.querySelector("#overlay-cancel").classList.add("hidden");
    document.querySelector(".rfq-form").classList.add("hidden");
  });
});

const loadRFQForm = () => {
  document.querySelector("#overlay-cancel").classList.remove("hidden");
  document.querySelector(".rfq-form").classList.remove("hidden");
};

// [
//   ["#btn-bundles", "#dropdown-bundles"],
//   ["#btn-pricing", "#dropdown-pricing"],
// ].forEach((group) => {
//   document.querySelector(group[0]).addEventListener("click", () => {
//     const dropdown = document.querySelector(group[1]);
//     dropdown.classList.toggle("hidden");
//     dropdown.classList.toggle("flex");
//   });
// });
