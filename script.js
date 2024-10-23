const translations = {
  id: {
    title1: "Kantin Terdekat",
    title2: "Promo menarik untuk anda",
    pickup: "Ambil di tempat",
    placehold: "Tentukan lokasi anda",
  },
  en: {
    title1: "Nearest Canteen",
    title2: "Promos for you",
    pickup: "Pickup",
    placehold: "Set your location",
  },
};

const languageSelectop = document.querySelector("select");
let t1 = document.getElementById("h2-first");
let t2 = document.getElementById("h2-second");
let pickup = document.getElementById("btn-pickup");

languageSelectop.addEventListener("change", (event) => {
  setLanguage(event.target.value)
})

const setLanguage = (language) => {
  if (language == "id") {
    t1.innerText = translations.id.title1;
    t2.innerText = translations.id.title2;
    pickup.innerText = translations.id.pickup;
  } else if (language == "en") {
    t1.innerText = translations.en.title1;
    t2.innerText = translations.en.title2;
    pickup.innerText = translations.en.pickup;
  }
};

// Cara Order
document.getElementById("order-info").addEventListener("click", function () {
  document.getElementById("popup").style.display = "flex"; // Show popup
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none"; // Hide popup
});

// Optional: Close popup when clicking outside of the popup content
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none"; // Hide popup
  }
});

