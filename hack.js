const rättanvändarnamn = "Bigmazi";
const rättlösenord = "Omarbest";

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const användarnamn = document.getElementById("username").value;
  const lösenord = document.getElementById("password").value;
  const hälsning = document.getElementById("hälsning");
  const spiderman = document.getElementById("spiderman");

  if (användarnamn === rättanvändarnamn && lösenord === rättlösenord) {
  
    spiderman.hidden = false;
  } else {
    hälsning.textContent = "Fel användarnamn eller lösenord.";
    spiderman.hidden = true;
  }
});