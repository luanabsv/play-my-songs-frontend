function submit() {
    const URL = "http://localhost:8080/apis/add-song-audio";
    var fdados = document.getElementById("fdados");
    fetch(URL, { method: "post", body: new FormData(fdados) })
      .then((response) => {
        return response.text();
      })
      .then((json) => {
        alert(json);
        fdados.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  }