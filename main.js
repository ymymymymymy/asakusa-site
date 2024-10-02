window.onload = function () {
  // スライダー
  const slide = document.getElementById("slider_content");
  console.log(slide.classList);
  const lists = document.querySelectorAll(".list");
  const totalSlides = lists.length;
  let count = 0;
  const indicator = document.getElementById("indicator");
  function indicatorStyle() {
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.backgroundColor =
        i === count % totalSlides ? "#7f5050" : "#fff";
    }
  }
  indicator.addEventListener("click", (event) => {
    if (event.target.classList.contains("list")) {
      const index = Array.from(lists).indexOf(event.target);
      slide.classList.remove(`slide${(count % totalSlides) + 1}`);
      count = index;
      slide.classList.add(`slide${(count % totalSlides) + 1}`);
      indicatorStyle();
    }
  });
};
