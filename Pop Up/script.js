const modal = document.querySelector(".popup");
const mainmodal = document.querySelector(".main-modal");
const closeBtn = document.querySelector(".btn button");

modal.addEventListener("click", () => {
  mainmodal.classList.add("active");
  mainmodal.style.opacity = "1";
});

closeBtn.addEventListener("click", () => {
  mainmodal.style.opacity = "0";
  setTimeout(() => {
    mainmodal.classList.remove("active");
  }, 300);
});