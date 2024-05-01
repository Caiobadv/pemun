document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.carousel', {
      // Opções do Swiper
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Adicione outras opções conforme necessário
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const countdownTimer = document.getElementById('countdown-timer');
  const endDate = new Date('July 3, 2024 00:00:00').getTime();

  let countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = endDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;

    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      countdownTimer.innerHTML = "<p>Evento iniciado!</p>";
    }
  }, 1000);
});