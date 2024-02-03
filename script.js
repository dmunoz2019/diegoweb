document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var form = modal.querySelector('form');
    var btns = document.querySelectorAll('.btn');
    var closeBtn = document.querySelector('.close');

    // Function to insert data into JSON and make a POST request
    function insertDataIntoJson(name, description, email) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer pataGl1oT1QNPwCdz.a85e90ce06f1f1355ef4fe52768f744ddd66cacb3c3357a3582905f20214da4f");

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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
               
            var sendButton = document.getElementById('send');
            var loadingIndicator = document.getElementById('loading');
            sendButton.style.display = "none";
            loadingIndicator.style.display = "block";
                modal.style.display = "none";
                document.getElementById('name_contact').value = '';
                document.getElementById('mail_contact').value = '';
                document.getElementById('message_contact').value = '';
                alert('Successfully sent');

            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred, please try again.');
            });
    }

    // Handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        var name = document.getElementById('name_contact').value;
        var email = document.getElementById('mail_contact').value;
        var message = document.getElementById('message_contact').value;
        insertDataIntoJson(name, message, email);
       

        
    }

    // Attach event listener to form for the submit event
    form.addEventListener('submit', handleFormSubmit);

    // Open modal when any .btn is clicked
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modal.style.display = "block";
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
});
