// БЛОК 6 — анимация фото

const flyPhotos = document.querySelectorAll(".fly-photo");

flyPhotos.forEach(photo => {

  photo.addEventListener("click", () => {

    photo.classList.toggle("active");

  });

});

// ФОРМА

const form = document.getElementById("rsvp-form");
const formMessage = document.getElementById("form-message");

if (form) {

  form.addEventListener("submit", function() {

    formMessage.innerText = "Отправка анкеты...";

    setTimeout(() => {
      formMessage.innerText = "Спасибо! Анкета отправлена";
    }, 1500);

  });

}

// КОНВЕРТ

const envelopeScreen = document.getElementById("envelopeScreen");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const siteContent = document.getElementById("siteContent");

if(openEnvelopeBtn){

  openEnvelopeBtn.addEventListener("click", function(){

    envelopeScreen.classList.add("hide");

    setTimeout(() => {

      siteContent.classList.add("show");

    }, 400);

  });

}

// ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ

const fadeItems = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, {
  threshold:0.15
});

fadeItems.forEach((item) => {
  fadeObserver.observe(item);
});