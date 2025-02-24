document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
  }, 1000); // Loading akan hilang setelah 2 detik
});


document.addEventListener("DOMContentLoaded", function () {
    var galleryItems = document.querySelectorAll(".gallery-item");
    var lightboxImage = document.getElementById("lightboxImage");

    galleryItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var imgSrc = item.getAttribute("data-img");
            lightboxImage.setAttribute("src", imgSrc);
        });
    });
});
