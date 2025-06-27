const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

menu.addEventListener("click", () => {
  if (mobileMenu.style.left === "0px") {
    mobileMenu.style.left = "-250px";
  } else {
    mobileMenu.style.left = "0px";
  }
});









//zenith

const positions = {
  carousel1: 0,
  carousel2: 0,
 
};


function updateCarousel(id) {
  const carousel = document.getElementById(id);
  const track = carousel.querySelector(".carousel-track");
  const totalSlides = track.children.length;
  const position = positions[id];

  track.style.transform = `translateX(-${position * 380}px)`;
}

function nextSlide(id) {
  const track = document.getElementById(id).querySelector(".carousel-track");
  const totalSlides = track.children.length;

  positions[id] = (positions[id] + 1) % totalSlides;
  updateCarousel(id);
}

function prevSlide(id) {
  const track = document.getElementById(id).querySelector(".carousel-track");
  const totalSlides = track.children.length;

  positions[id] = (positions[id] - 1 + totalSlides) % totalSlides;
  updateCarousel(id);
}



//prajwalan
 const track = document.getElementById('sliderUnitTrack');
    const slides = document.querySelectorAll('.slider-unit-slide');
    let currentIndex = 0;

    function moveSlide(step) {
      currentIndex = (currentIndex + step + slides.length) % slides.length;
      updateSlide();
    }

    function updateSlide() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Optional: Auto slide every 3 seconds
   // setInterval(() => moveSlide(1), 3000);