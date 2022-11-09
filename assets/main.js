//import fetch from "node-fetch";
const API = 'https://rickandmortyapi.com/api';

const content = null || document.querySelector('#primary-content');

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const dataRM = await fetchData(`${API}/character`);
    console.log(dataRM);
    let view = '';
    /*     let view = `
        ${dataRM.results.map(charater => `
        <div class="card">
          <img src="${charater.image}" alt="${charater.name}">
          <div class="info">
            <h3 class="name">${charater.name}</h3>
            <p class="status">${charater.status}</p>
            <p class="specie">${charater.species}</p>
            <p class="location">${charater.location.name}</p>
            <p class="gender">${charater.gender}</p>
            <p class="origin">${charater.origin.name}</p>
          </div>  
        </div>`)}`; */
    for (let value of dataRM.results) {
      view += `
          <div class="card">
            <img src="${value.image}" alt="${value.name}">
            <div class="info-container">
              <div class="info">
                <h3 class="name">${value.name}</h3>
                <hr>
                <p class="specie">${value.species}</p>
                <p class="status">${value.status}</p>
                <p class="location">${value.location.name}</p>
                <p class="gender">${value.gender}</p>
                ${value.origin.name==='unknown'?``:`<p class="origin">${value.origin.name}</p>`}
              </div>  
            </div>
          </div>`;
    }
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();