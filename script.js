//This function fetches the dog-facts-api
fetch("https:dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //this function selects a random dog fact
    console.log(data);
    const num = Math.floor(Math.random() * data.length);
    const dogFact = data[num];
    console.log(dogFact);
  });

// Assignment code here

fetch("https://dog.ceo/api/breeds/image/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //this function selects a random dog picture
    console.log(data);
    const num = Math.floor(Math.random() * data.length);
    const dogPicture = data[num];
    console.log(dogPicture);
  });
