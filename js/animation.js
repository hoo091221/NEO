document.addEventListener("DOMContentLoaded", () => {
  const splashText = document.querySelector(".splash-text");
  const splashP = document.querySelector(".splash-p");

  setTimeout(() => {
    splashText.style.opacity = "1";
    splashText.style.transform = "translateY(0)";

    setTimeout(() => {
      splashP.style.opacity = "1";
      splashP.style.transform = "translateY(0)";
    }, 500);
  }, 500);
});
