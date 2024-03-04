//////////////////////////////////////////////////////טיימר
const raffleDate = new Date("2024-01-23T00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = raffleDate - now;

  // Check if the countdown has ended
  if (distance <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "RAFFLE ENDED";
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("timer").innerHTML = `
    <p>  ${days}d     ${hours}h ${minutes}m  ${seconds}s </p>`;

    

}

//תמונות מתחלפות
const page = window.location.href;
const changeImg = document.getElementById("changeImg");
let value = 2;
let num = 1;
if (page.includes("http://127.0.0.1:5501/pages/home/home.html")) {
if (num < 4) {
  setInterval(() => {
     value--;
     if (value === 0) {
         changeImg.src = "../../assets/רווחה" + num + ".jpg";
         num++;
         value = 2;
         if (num === 4) {
             num = 1;
         }
     }
 }, 1000)
}
}

