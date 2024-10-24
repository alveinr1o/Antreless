const translations = {
  id: {
    title1: "Kantin Terdekat",
    title2: "Promo menarik untuk anda",
    pickup: "Ambil di tempat",
    orderinfo: "Cara order",
    call: "Hubungi Restaurant",
    hto: "Cara Order",
    step1: "Pilih produk untuk untuk dimasukan ke keranjang",
    step2: "Verifikasi",
    step3: "Pilih pembayaran & pesanan akan diproses",
    kantin: "Lihat kantin",
  },
  en: {
    title1: "Nearest Canteen",
    title2: "Promos for you",
    pickup: "Pickup",
    orderinfo: "How to order",
    call: "Call Restaurant",
    hto: "How to Order",
    step1: "Select products to put in the cart",
    step2: "Verification",
    step3: "Select payment & order will be processed",
    kantin: "View canteen",
  },
};

const languageSelectop = document.querySelector("select");
let t1 = document.getElementById("h2-first");
let t2 = document.getElementById("h2-second");
let pickup = document.getElementById("btn-pickup");
let orderinfo = document.getElementById("order-info");
let callres = document.getElementById("call-btn");
let htorder = document.getElementById("howtoorder");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let kantin = document.getElementById("kantin-maps");

const setLanguage = (language) => {
  if (language == "id") {
    t1.innerText = translations.id.title1;
    t2.innerText = translations.id.title2;
    pickup.innerText = translations.id.pickup;
    orderinfo.innerText = translations.id.orderinfo;
    callres.innerText = translations.id.call;
    htorder.innerText = translations.id.hto;
    step1.innerText = translations.id.step1;
    step2.innerText = translations.id.step2;
    step3.innerText = translations.id.step3;
    kantin.innerText = translations.id.kantin;
  } else if (language == "en") {
    t1.innerText = translations.en.title1;
    t2.innerText = translations.en.title2;
    pickup.innerText = translations.en.pickup;
    orderinfo.innerText = translations.en.orderinfo;
    callres.innerText = translations.en.call;
    htorder.innerText = translations.en.hto;
    step1.innerText = translations.en.step1;
    step2.innerText = translations.en.step2;
    step3.innerText = translations.en.step3;
    kantin.innerText = translations.en.kantin;
  }
};

const saveLanguage = (language) => {
  localStorage.setItem("selectedLanguage", language);
};

// Ketika bahasa diubah oleh pengguna
languageSelectop.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  setLanguage(selectedLanguage);
  saveLanguage(selectedLanguage);
});

// Fungsi untuk mendapatkan bahasa dari localStorage
const getSavedLanguage = () => {
  return localStorage.getItem("selectedLanguage") || "id"; // Default ke "id" jika belum ada bahasa yang tersimpan
};

// Saat halaman dimuat, set bahasa sesuai yang tersimpan di localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = getSavedLanguage();
  setLanguage(savedLanguage);
  languageSelectop.value = savedLanguage; // Set pilihan dropdown sesuai bahasa yang tersimpan
});

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

// Maps
document.getElementById("kantin-maps").addEventListener("click", function () {
  document.getElementById("popup-maps").style.display = "flex"; // Show popup
});

document.querySelector(".close-btn-maps").addEventListener("click", function () {
  document.getElementById("popup-maps").style.display = "none"; // Hide popup
});

// Optional: Close popup when clicking outside of the popup content
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("popup-maps")) {
    document.getElementById("popup-maps").style.display = "none"; // Hide popup
  }
});

