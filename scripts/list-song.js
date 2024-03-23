function getSongs() {
  const ol = document.getElementById("allsongs");

  let endpoint = "http://localhost:8080/apis/get-all-songs";

  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let list = "";
      json.forEach((element) => {
        list += `<div class="music-listing">
        <img src="artist-image.jpg" alt="Artist name" class="artist-image" />
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
      });
      ol.innerHTML = list;
    })
    .catch((error) => (ol.innerHTML = `<li>Erro: ${error}</li>`));
}

function buscaMusicas() {
  const musica = document.getElementsByName("musica")[0].value;
  const tag = document.getElementById("musicas");
  let endpoint = "http://localhost:8080/apis/get-all";
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let lista = "";
      const nomeArquivo = e.nome + "_" + e.estilo + "_" + e.cantor + ".mp3";
      for (let e of json) {
        lista += `<audio controls>
                        <source src="${
                          "http://localhost:8080/musicas/" + nomeArquivo
                        }" type="audio/mpeg">
                    </audio>
                    <p>${e.nomeArquivo}</p>`;
      }
      tag.innerHTML = lista;
    })
    .catch((Err) => {
      tag.innerHTML = `<li>Erro: ${Err}</li>`;
    });
}
