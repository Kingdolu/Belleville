// Visitor Counter
let count = localStorage.getItem("visitorCount") || 0;
count++;
localStorage.setItem("visitorCount", count);
document.getElementById("visitor-count").textContent = count;

// Ticker with Date, Time, Location
function updateTicker(pos) {
  const date = new Date();
  const locationText = `Lat: ${pos.coords.latitude.toFixed(2)}, Lon: ${pos.coords.longitude.toFixed(2)}`;
  document.getElementById("ticker").textContent = `${date.toLocaleString()} | Location: ${locationText}`;
}

function tickerError() {
  const date = new Date();
  document.getElementById("ticker").textContent = `${date.toLocaleString()} | Location: Unknown`;
}

navigator.geolocation.getCurrentPosition(updateTicker, tickerError);

// Menu active link color
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Star rating logic
function rateProduct(stars) {
  let rating = prompt("Rate this product from 1-5:");
  rating = Math.max(1, Math.min(5, parseInt(rating)));
  stars.innerHTML = "★★★★★".substring(0, rating) + "☆☆☆☆☆".substring(rating);
}
