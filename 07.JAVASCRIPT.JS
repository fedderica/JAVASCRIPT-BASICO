En JavaScript, puede realizar una solicitud HTTP utilizando el objeto XMLHttpRequest o el método fetch(). Aquí hay un ejemplo usando fetch():




fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
