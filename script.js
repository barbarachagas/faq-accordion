const accordions = document.querySelectorAll(".accordion--question");

accordions.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    var answer = item.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      item.getElementsByTagName("img")[0].style.display = "block";
      item.getElementsByTagName("img")[1].style.display = "none";
    } else {
      item.getElementsByTagName("img")[0].style.display = "none";
      item.getElementsByTagName("img")[1].style.display = "block";
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
