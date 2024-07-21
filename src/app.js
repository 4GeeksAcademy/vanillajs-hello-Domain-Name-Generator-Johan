const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];

function generateDomain() {
  const randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];

  const randomDomain = randomPronoun + randomAdj + randomNoun;
  document.getElementById("domainInput").value = randomDomain;
}

// Función para generar un dominio basado en una palabra personalizada
function generateCustomDomain() {
  const customAdj = document.getElementById("customNounInput").value.trim();
  if (!customAdj) {
    alert("Por favor, introduce una palabra para generar el dominio.");
    return;
  }

  const randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];

  const customDomain = randomPronoun + customAdj + randomNoun;
  document.getElementById("customDomainInput").value = customDomain;
}

// Event listeners para los formularios
document
  .getElementById("randomDomainForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    generateDomain();
  });

document
  .getElementById("userNounForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    generateCustomDomain();
  });
