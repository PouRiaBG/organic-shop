if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceWorker.js")
    .then(function (res) {
      console.log(res);
    })
    .catch((error) => {
      console.log({ error });
    });
}
