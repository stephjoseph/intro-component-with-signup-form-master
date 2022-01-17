const form = document.getElementById("form");
const formInputs = document.querySelectorAll(".form-input");
const errorMessage = document.querySelectorAll(".error-message");
const errorIcon = document.querySelectorAll(".error-icon");

formInputs.forEach(() => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].value === "") {
        formInputs[i].classList.remove("border", "border-[#DEDEDE]");
        formInputs[i].classList.add("border-2", "border-[#FF7979]");
        errorMessage[i].classList.remove("hidden");
        errorIcon[i].classList.remove("hidden");
      } else {
        formInputs[i].classList.add("border", "border-[#DEDEDE]");
        formInputs[i].classList.remove("border-2", "border-[#FF7979]");
        errorMessage[i].classList.add("hidden");
        errorIcon[i].classList.add("hidden");
      }
    }
  });
});
