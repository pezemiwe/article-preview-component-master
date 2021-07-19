let shareBtn = document.querySelector(".share");
let iconsBar = document.querySelector(".bar");

shareBtn.addEventListener("click", function () {
  iconsBar.classList.toggle("active");
});
