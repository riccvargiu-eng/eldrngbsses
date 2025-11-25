//DOM

import { apiCall } from "./fetch.js";

const API_BASE_URL = "https://eldenring.fanapis.com/api/bosses?limit=20";
const ul = document.getElementById("ul");

async function fetchBosses() {
  const response = await apiCall(API_BASE_URL);

  if (response) {
    console.log("Dati Boss ricevuti", response);

    const bosses = response.data;

    bosses.forEach((boss) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="card">
          <h3><strong>${boss.name}</strong></h3>
          <p><strong>Location:</strong> ${boss.location}</p>
          <img src="${boss.image}" alt="${boss.name}" width="150">
        </div>`;
      ul.appendChild(li);
    });
  }
}

fetchBosses();
