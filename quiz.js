function Namn(event) {
  event.preventDefault();
  const input = document.getElementById("inputField").value;
  console.log(input);
  const text = document.getElementById("hälsning");
  text.innerText = "Hej " + input;
}

const formulär = document.getElementById("formulär");
formulär.addEventListener("submit", Namn);