let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')


btn.addEventListener('click', function() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        let random = Math.floor(Math.random() * data.length);
        quote.innerText = data[random].text;
        person.innerText = data[random].author;
    });
})