window.onload = function () {
  function initializeSlideshow() {
    let images = document.querySelectorAll("img:not(.header-img)");
    let currentIndex = 0;

    function showNextImage() {
      images[currentIndex].classList.remove("active", "rotate");
      images[currentIndex].style.display = "none";

      currentIndex = (currentIndex + 1) % images.length;

      images[currentIndex].classList.add("active");
      images[currentIndex].style.display = "block";
    }

    function rotateImages() {
      let previousIndex = (currentIndex - 1 + images.length) % images.length;
      images[previousIndex].classList.remove("rotate");

      images[currentIndex].classList.add("rotate");
    }

    showNextImage();

    setInterval(function () {
      showNextImage();
    }, 4000);

    setInterval(function () {
      rotateImages();
    }, 20000);
  }

  initializeSlideshow();
};

function attachDropdownListener() {
  document.getElementById("iletisim").addEventListener("change", function () {
    var option = this.options[this.selectedIndex];
    var href = option.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });
}

document.getElementById("iletisim").addEventListener("change", function () {
  var option = this.options[this.selectedIndex];
  var href = option.getAttribute("data-href");
  if (href) {
    window.location.href = href;
  }
  this.selectedIndex = 0;
});
