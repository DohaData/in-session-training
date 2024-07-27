// index.js

fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log("Parsed response: ", data);
    const mainContainer = document.getElementById("main-container");
    data.forEach((launch) => {
      if (!launch.links.patch.small) {
        launch.links.patch.small = "https://via.placeholder.com/200";
      }
      const launchElement = document.createElement("div");
      launchElement.innerHTML = `
        <h2>${launch.name}</h2>
        <p>${launch.details}</p>
        <img src="${launch.links.patch.small}" alt="Image of ${launch.name}">
      `;
      mainContainer.appendChild(launchElement);
    });
  })
  .catch((err) => console.log(err));
