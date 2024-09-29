function saatiGoster() {
  const zaman = new Date();
  const divSaat = document.getElementById("saat");
  divSaat.textContent = zaman.toLocaleTimeString("tr");
}
saatiGoster();
setInterval(saatiGoster, 1000); //updating the time every second
