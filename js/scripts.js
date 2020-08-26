'use strict';

let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');

function getQuote(category) {
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

  $.ajax({
      type: "GET",
      url: apiUrl,
      success: function (response) {
        $('#chuckSays').text(response.value);
        $('#myModal').modal('toggle');

      },
      error: function (error) {
        console.error("ERROR", error);
      }
  });
}

refreshQuoteButton.addEventListener('click', function(e) {
  e.preventDefault();
  getQuote(category);
});

submitFormButton.addEventListener('click', function(e) {
  e.preventDefault();
  const categoryInput = document.querySelector('#categoryInput');

  category = categoryInput.value;
  getQuote(category);
});

$(document).ready(() => {
  getQuote(category);
})
