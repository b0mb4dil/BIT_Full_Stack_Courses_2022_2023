const randomPerson = async () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(response => {
        response.results.map(person => {
            document.querySelector('.profile-picture').innerHTML = `<img src="${person.picture.large}" />`;


            document.querySelector('h2').innerText = `${person.name.first} ${person.name.last}`;
            document.getElementById('user').addEventListener('mouseover', function() {
                document.getElementById('information-field').innerText = `Age: ${person.dob.age}`;
                document.querySelector('#user i').style.color = 'green';
            })

            document.getElementById('email').addEventListener('mouseover', function() {
                document.getElementById('information-field').innerText = `${person.email}`;
                document.querySelector('#email i').style.color = 'blue';
            })

            document.getElementById('calendar').addEventListener('mouseover', function() {
                document.getElementById('information-field').innerText = `${person.registered.date}`;
                document.querySelector('#calendar i').style.color = 'orange';
            })

            document.getElementById('map').addEventListener('mouseover', function() { 
                document.getElementById('information-field').innerText = `${person.location.city}, ${person.location.country}`;
                document.querySelector('#map i').style.color = 'yellow';
            })

            document.getElementById('phone').addEventListener('mouseover', function() {
                document.getElementById('information-field').innerText = `${person.phone}`;
                document.querySelector('#phone i').style.color = 'purple';
            })

            document.getElementById('lock').addEventListener('mouseover', function() {
                document.getElementById('information-field').innerText = `Username: ${person.login.username}`;
                document.querySelector('#lock i').style.color = 'red';
            })
            console.log(person)

        });
    })
}

randomPerson();

document.querySelectorAll('.icons i').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.color = 'rgb(220, 220, 220)';
    })
})