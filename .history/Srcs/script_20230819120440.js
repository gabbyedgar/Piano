let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./audio/";
window.onload = () => {
  //24keys
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    div.classList.add("key", index <= 10 ? "black-key" : "white-key");
    //For playing audio on click
    const number = index <= 9 ? "0" + index : index;
    div.addEventListener("click", () => {
      new Audio(`${base}key${number}.mp3`).play();
    });
    pianoContainer[0].appendChild(div);
  }
};