window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  key.classList.add("playing");
  const span = key.children[1];
  const inner = span.innerHTML;
  const audio = new Audio(`audios/${inner}.mp3`);
  audio.play();

  setTimeout(() => {
    key.classList.remove("playing");
  }, 200);
});
