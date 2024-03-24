let endpoint = "http://localhost:8080/apis/";
const ol = document.getElementById("allsongs");

function searchMusic() {
  const searchInput = document.getElementById("search").value;

  if (searchInput == "") {
    getSongs("get-all-songs", "Não há músicas cadastradas");
  } else {
    getSongs(
      "get-musicas/" + searchInput,
      "Nenhuma música encontrada com esse termo"
    );
  }
}

function getSongs(finalEndpoint, messageNotFound) {
  fetch(endpoint + finalEndpoint)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let list = "";

      if (json.length > 0) {
        json.forEach((element) => {
          list += returnHtml(element);
        });
      } else list = `<li class="text-center">${messageNotFound}</li>`;

      ol.innerHTML = list;
    })
    .catch((error) => (ol.innerHTML = `<li>Erro: ${error}</li>`));
}

function returnHtml(element) {
  return `<div class="music-listing">
          <div class="music-info">
           <h2 class="music-name">${element.nome}</h2>
           <p class="artist-name">${element.cantor}</p>
           <p class="music-genre">${element.estilo}</p>
          </div>
          <audio controls>
            <source src="http://localhost:8080/songs/${element.nomeArquivo}" />
            Your browser does not support the audio element.
          </audio>
        </div>`;
}

// function search() {
//   const ol = document.getElementById("allsongs");
//   const searchInput = document.getElementById("search").value;
//   let endpoint = "http://localhost:8080/apis/get-musicas/" + searchInput;

//   if(searchInput == '') {
//     getSongs();
//   } else {

//     fetch(endpoint)
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       let list = "";
//       json.forEach((element) => {
//         list += `<div class="music-listing">
//         <div class="music-info">
//            <h2 class="music-name">${element.nome}</h2>
//            <p class="artist-name">${element.cantor}</p>
//            <p class="music-genre">${element.estilo}</p>
//            </div>
//            <audio controls>
//            <source src="http://localhost:8080/songs/${element.nomeArquivo}" />
//            Your browser does not support the audio element.
//            </audio>
//            </div>`;
//           });
//           ol.innerHTML = list;
//         })
//         .catch((error) => (ol.innerHTML = `<li>Erro: ${error}</li>`));
//       }
// }
