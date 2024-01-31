// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.querySelectorAll('.btn');
var btnContact = document.getElementById('send');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.forEach(function(element) {
    element.onclick = function() {
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// When the user clicks on the button of the modal it send the data to an api and close the modal saying that the data was sent
btnContact.onclick = function() {
    var name = document.getElementsByName('name')[0].value;
    // var email = document.getElementById('email').value;
    // var message = document.getElementById('message').value;
    var data = {
        name: name,
        // email: email,
        // message: message
    };
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        modal.style.display = "none";
        alert('Data sent');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}