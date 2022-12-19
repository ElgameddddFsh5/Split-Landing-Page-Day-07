let contentLeft = document.querySelector(".contentleft"),
  contentRight = document.querySelector(".contentright"),
  content = document.querySelector(".content");
contentLeft.addEventListener("mouseover", () => {
  contentLeft.style = "width:70%;";
  contentRight.style = "width:30%;";
});
contentRight.addEventListener("mouseover", () => {
  contentRight.style = "width:70%;";
  contentLeft.style = "width:30%;";
});
