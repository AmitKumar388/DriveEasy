let currentStep = 1;

// Open Popup
document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "flex";
  showStep(1);
});

document.getElementById("registerBtn").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "flex";
  showStep(2);
});

// Close Popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "none";
});

// Background Click to Close
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("popupContainer")) {
    document.getElementById("popupContainer").style.display = "none";
  }
});

// Function to show specific step
function showStep(step) {
  document
    .querySelectorAll(".step")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("step" + step).classList.add("active");
}

// Next Step
function nextStep(step) {
  currentStep = step;
  showStep(currentStep);
}

// Previous Step
function prevStep(step) {
  currentStep = step;
  showStep(currentStep);
}

document
  .getElementById("searchcar")
  .addEventListener("click", function () {
    window.location.href = "searchcar.html";
  });
