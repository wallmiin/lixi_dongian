const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "MB 0365666413 xia xìa Củm ơn tấm lòng :v ";
  gif.src =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjR0Z3Q0b2NzYjM1eWdlbW4yOGtiYnF2cGM2bnQ5czJyOG9sY2Z3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QaYqtStGSYNd21aXQp/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
