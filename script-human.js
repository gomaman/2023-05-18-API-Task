let nameInputForm = document.querySelector("#name-input-form");
let nameInputField = document.querySelector("#fname");
let nameInformationContainer = document.querySelector('.name-information')
let nameInformationList = document.createElement('ul')
let nameInformationError = document.createElement('span')


nameInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  pickedName = nameInputField.value;

    if(!pickedName == ''){
        fetch(`https://api.genderize.io/?name=${pickedName}`)
        .then((response) => response.json())
        .then((data) => {
            let nameGenderInformationListItem = document.createElement('li')
            nameGenderInformationListItem.textContent = data
            nameInformationList.append(nameGenderInformationListItem)
          console.log(data);

        });
    
      fetch(`https://api.nationalize.io?name=${pickedName}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    
      fetch(`https://api.agify.io?name=${pickedName}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }else {
        nameInformationError.textContent = 'irasyk varda nu'
        // nameInformationList.append(nameInformationError)

    }

    nameInformationList.append(nameInformationError)
    nameInformationContainer.append(nameInformationList)
});
