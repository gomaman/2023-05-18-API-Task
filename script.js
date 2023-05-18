let buttonTest = document.querySelector("#test-button");
let promptLocation = document.querySelector("#prompt");
let documentTitle = document.querySelector("h1");
let dogPictureButton = document.querySelector("#button-dog-picture-generator");
let dogPicturesButton = document.querySelector("#button-dog-multiple-picture-generator");
let dogPictureContainer = document.querySelector(".dog-container");
let dogPicturesContainer = document.querySelector(".multiple-dog-container");
let dogBreedSelector = document.querySelector("#dog-breed-selection");
let magicNumber = document.querySelector("#magic-number");
let number = magicNumber.value;

function pictureGenerator(button) {
  button.addEventListener("click", () => {
    if (dogBreedSelector.value == "random") {
      fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then((data) => {
          let picture = document.createElement("img");
          picture.src = data.message;
          picture.classList.add("picture");
          dogPictureContainer.append(picture);
        });
    } else if (dogBreedSelector.value !== "random") {
      let specificBreed = dogBreedSelector.value;
      fetch(`https://dog.ceo/api/breed/${specificBreed}/images/random`)
        .then((response) => response.json())
        .then((data) => {
          let picture = document.createElement("img");
          picture.src = data.message;
          picture.classList.add("picture");
          dogPictureContainer.append(picture);
        });
    }
  });
}

function multiplePictureGenerator(button) {
    magicNumber.addEventListener("change", () => {
    number = magicNumber.value;
    
  });

  button.addEventListener("click", () => {
    if (dogBreedSelector.value == "random") {
      fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then((response) => response.json())
        .then((data) => {
          let dogLink = data.message;
          dogLink.forEach((god) => {
            let picture = document.createElement("img");
            picture.src = god;
            picture.classList.add("picture");
            dogPicturesContainer.append(picture);
          });
        });
    } else if (dogBreedSelector.value !== "random") {
      let specificBreed = dogBreedSelector.value;
      fetch(
        `https://dog.ceo/api/breed/${specificBreed}/images/random/${number}`
      )
        .then((response) => response.json())
        .then((data) => {
          let dogLink = data.message;
          dogLink.forEach((god) => {
            let picture = document.createElement("img");
            picture.src = god;
            picture.classList.add("picture");
            dogPicturesContainer.append(picture);
          });
        });
    }
  });
}

function dogBreedGenerator() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((dogbreed) => {
      const dogBreeds = dogbreed.message;
      for (breed in dogBreeds) {
        let breedOption = document.createElement("option");
        breedOption.value = breed;
        breedOption.textContent = breed;
        dogBreedSelector.append(breedOption);
      }
    });
}

dogBreedGenerator();
pictureGenerator(dogPictureButton);
multiplePictureGenerator(dogPicturesButton);

