// БЛОК 6 — анимация фото

const flyPhotos = document.querySelectorAll(".fly-photo");

flyPhotos.forEach(photo => {

  photo.addEventListener("click", () => {

    photo.classList.toggle("active");

  });

});

// ОТПРАВКА ФОРМЫ В GOOGLE ТАБЛИЦУ

const form = document.getElementById("rsvp-form");
const formMessage = document.getElementById("form-message");

const GOOGLE_SCRIPT_URL = "https://docs.google.com/spreadsheets/d/1V76f-CNrr17P1bIIe8L0IUNaGHHOGBwj0hHZ6iWmzbk/edit?usp=sharing";

if (form) {
  let isSending = false;

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    if (isSending) return;
    isSending = true;

    const btn = form.querySelector(".submit-btn");
    btn.style.opacity = "0.6";
    btn.style.pointerEvents = "none";

    const data = new FormData(form);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
      });

      form.reset();
      formMessage.textContent = "Спасибо! Анкета отправлена";

    } catch (error) {
      formMessage.textContent = "Ошибка отправки. Попробуйте еще раз";
    } finally {
      isSending = false;
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    }
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