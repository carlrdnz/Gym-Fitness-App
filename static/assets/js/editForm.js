function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Check if this cookie is the one we're looking for
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

document.getElementById('editProfileBtn').addEventListener('click', function() {
    // Show input fields, hide spans
    document.getElementById('fullname').classList.add('d-none');
    document.getElementById('fullnameInput').classList.remove('d-none');
    document.getElementById('email').classList.add('d-none');
    document.getElementById('emailInput').classList.remove('d-none');
    document.getElementById('phonenumber').classList.add('d-none');
    document.getElementById('phonenumberInput').classList.remove('d-none');
    document.getElementById('address').classList.add('d-none');
    document.getElementById('addressInput').classList.remove('d-none');

    // Show save and cancel buttons, hide edit button
    document.getElementById('saveProfileBtn').classList.remove('d-none');
    document.getElementById('cancelEditBtn').classList.remove('d-none');
    document.getElementById('editProfileBtn').classList.add('d-none');
});

document.getElementById('cancelEditBtn').addEventListener('click', function() {
    // Show spans, hide input fields
    document.getElementById('fullname').classList.remove('d-none');
    document.getElementById('fullnameInput').classList.add('d-none');
    document.getElementById('email').classList.remove('d-none');
    document.getElementById('emailInput').classList.add('d-none');
    document.getElementById('phonenumber').classList.remove('d-none');
    document.getElementById('phonenumberInput').classList.add('d-none');
    document.getElementById('address').classList.remove('d-none');
    document.getElementById('addressInput').classList.add('d-none');

    // Show edit button, hide save and cancel buttons
    document.getElementById('editProfileBtn').classList.remove('d-none');
    document.getElementById('saveProfileBtn').classList.add('d-none');
    document.getElementById('cancelEditBtn').classList.add('d-none');
});

document.getElementById('saveProfileBtn').addEventListener('click', function() {
    // Get the updated values from input fields
    var newFullname = document.getElementById('fullnameInput').value;
    var newEmail = document.getElementById('emailInput').value;
    var newPhonenumber = document.getElementById('phonenumberInput').value;
    var newAddress = document.getElementById('addressInput').value;

    // Make an AJAX request to save the changes
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/save_profile_changes/', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Changes saved successfully
                    // Update the profile information on the page if needed
                    document.getElementById('fullname').textContent = newFullname;
                    document.getElementById('email').textContent = newEmail;
                    document.getElementById('phonenumber').textContent = newPhonenumber;
                    document.getElementById('address').textContent = newAddress;
                } else {
                    alert('Failed to save changes: ' + response.message);
                }
            } else {
                alert('Failed to save changes');
            }
        }
    };

    // Send the data
    xhr.send('new_fullname=' + newFullname + '&new_email=' + newEmail + '&new_phonenumber=' + newPhonenumber + '&new_address=' + newAddress);

    // Update the spans with the new values
    document.getElementById('fullname').textContent = newFullname;
    document.getElementById('email').textContent = newEmail;
    document.getElementById('phonenumber').textContent = newPhonenumber;
    document.getElementById('address').textContent = newAddress;

    document.getElementById('fullnameDisplay').textContent = newFullname;
    document.getElementById('phonenumberDisplay').textContent = newPhonenumber;
    document.getElementById('addressDisplay').textContent = newAddress;

    // Show spans, hide input fields
    document.getElementById('fullname').classList.remove('d-none');
    document.getElementById('fullnameInput').classList.add('d-none');
    document.getElementById('email').classList.remove('d-none');
    document.getElementById('emailInput').classList.add('d-none');
    document.getElementById('phonenumber').classList.remove('d-none');
    document.getElementById('phonenumberInput').classList.add('d-none');
    document.getElementById('address').classList.remove('d-none');
    document.getElementById('addressInput').classList.add('d-none');

    // Show edit button, hide save and cancel buttons
    document.getElementById('editProfileBtn').classList.remove('d-none');
    document.getElementById('saveProfileBtn').classList.add('d-none');
    document.getElementById('cancelEditBtn').classList.add('d-none');
});
