// Get the modal
var modal = document.getElementById('myModal');
// Function to insert data into JSON and make POST request


function insertDataIntoJson(name, description, email) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer pataGl1oT1QNPwCdz.a85e90ce06f1f1355ef4fe52768f744ddd66cacb3c3357a3582905f20214da4f");
  myHeaders.append("Cookie", "brw=brwyqAdeNEDrHfS9a; AWSALB=lOuE83lv+eONBicvYS4Xilun89GXHLitbQ3j/jTnUM2a1gbDqG5C4jdMr2S4vsAL0sqL43LizKcRftansW8cEwwh0GHP9dHcJtLGLW1PFwmrsIJhG8AbJl8QN+Vd; AWSALBCORS=lOuE83lv+eONBicvYS4Xilun89GXHLitbQ3j/jTnUM2a1gbDqG5C4jdMr2S4vsAL0sqL43LizKcRftansW8cEwwh0GHP9dHcJtLGLW1PFwmrsIJhG8AbJl8QN+Vd");

  var raw = JSON.stringify({
    "fields": {
      "name": name,
      "description": description,
      "email": email
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.airtable.com/v0/appatSOYpAu35i9ae/leads", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

// Example usage
// Suppose these values come from a form
var name = "Union Square";
var description = "Implementación de página web";
var email = "testing@example.com";

// Call the function with the form data
insertDataIntoJson(name, description, email);

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
// Assuming insertDataIntoJson function is defined as before

btnContact.onclick = function() {
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementById('email').value; // Uncommented to use in the function call
    var message = document.getElementById('message').value; // Uncommented to use as description

    // Call the previously defined function with the form data
    insertDataIntoJson(name, message, email); // Assuming 'message' is used for the 'description' parameter

    // You may handle the modal display and alert in the .then or .catch of the insertDataIntoJson if it's asynchronous and returns a promise
    // For now, assuming the function does not handle UI feedback directly, you might want to place UI feedback here or adjust accordingly
};
