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
let currentPage = 0;
const limit = 27;

//spostarsi di pagina
// async function changePage(pageNumber) {
//   if (pageNumber < 0) return;
//   currentPage = pageNumber;
//   const click = await apiCall(
//     `https://eldenring.fanapis.com/api/bosses?limit=${limit}&page=${currentPage}` //&{} serve a recuperare current page che deve essere dinamico
//   );
//   if (click) {
//     ul.innerHTML = ""; // pulisci lista prima di riempire
//     const bosses = click.data;

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
// }

// document.getElementById("next").addEventListener("click", () => {
//   if (currentPage < 3) {
//     changePage(currentPage + 1);
//   }
// });

// document.getElementById("prev").addEventListener("click", () => {
//   if (currentPage > 0) changePage(currentPage - 1);
// });

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
