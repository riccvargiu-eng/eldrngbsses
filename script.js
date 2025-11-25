//DOM

import { apiCall } from "./fetch.js";

const API_BASE_URL = "https://eldenring.fanapis.com/api/bosses?limit=27&page=0";
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
                <p>Description: ${boss.description}</p>
             <p>HealthPoints ${boss.healthPoints}</p>
             <p>Drops: ${boss.drops}</p>
          <img class="boss-image" src="${boss.image}" alt="${boss.name}">

        </div>`;
      ul.appendChild(li);
    });
  }
}

fetchBosses();

//spostarsi di pagina
// async function changePage() {

//     bosses.forEach((boss) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <div class="card">
//           <h3><strong>${boss.name}</strong></h3>
//           <p><strong>Location:</strong> ${boss.location}</p>
//                 <p>Description: ${boss.description}</p>
//              <p>HealthPoints ${boss.healthPoints}</p>
//              <p>Drops: ${boss.drops}</p>
//           <img class="boss-image" src="${boss.image}" alt="${boss.name}">

//         </div>`;
//       ul.appendChild(li);
//     });
//   }

//searchbar

// function searchBosses(bosses) {

// bosses.forEach((boss) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <div class="card">
//         <h3><strong>${boss.name}</strong></h3>
//         <p><strong>Location:</strong> ${boss.location}</p>
//         <p>Description: ${boss.description}</p>
//         <p>HealthPoints: ${boss.healthPoints}</p>
//         <p>Drops: ${boss.drops}</p>
//         <img class="boss-image" src="${boss.image}" alt="${boss.name}">
//       </div>`;
//     ul.appendChild(li);
//   });
// }
