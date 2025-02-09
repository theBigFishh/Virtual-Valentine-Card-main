function start () {
  // (PART A) GET SPLASH SCREEN
  let splash = document.getElementById("splash");
 
  // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });
 
  // (PART C) GO!
  splash.classList.add("hide");
}


let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");



images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`/YamisYami${index}.png`);

  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

