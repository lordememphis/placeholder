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

document.querySelector("#pkg-btn").addEventListener("click", () => {
  const dropdown = document.querySelector("#pkg-dropdown");
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("flex");
});
