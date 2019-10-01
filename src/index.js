import anime from "animejs";

import "./styles.scss";

const card = document.querySelector(".card");
let playing = false;

card.addEventListener("click", () => {
  if (playing) return;

  playing = true;
  anime({
    targets: card,
    scale: [{ value: 1 }, { value: 1.25 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 150 },
    easing: "easeInOutSine",
    duration: 400,
    complete: () => {
      playing = false;
    }
  });
});
