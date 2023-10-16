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

    // Update the spans with the new values
    document.getElementById('fullname').textContent = newFullname;
    document.getElementById('email').textContent = newEmail;
    document.getElementById('phonenumber').textContent = newPhonenumber;
    document.getElementById('address').textContent = newAddress;

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
