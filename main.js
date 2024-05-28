window.onload = function () {
  var images = document
    .getElementsByClassName("content")[0]
    .getElementsByTagName("img");
  var currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 4000);
};
