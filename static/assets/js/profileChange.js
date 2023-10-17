// Add an event listener to the "Edit" button
document.getElementById('editProfileBtn').addEventListener('click', function() {
    // Toggle the visibility of the file input
    var profilePictureInput = document.getElementById('profilePictureInput');
    profilePictureInput.classList.toggle('d-none');
});

// Add an event listener to the "Cancel" button
document.getElementById('cancelEditBtn').addEventListener('click', function(event) {
    // Prevent the "Cancel" button click event from reaching the document
    event.stopPropagation();
    event.preventDefault();
    
    // Ensure the profile picture input remains hidden
    var profilePictureInput = document.getElementById('profilePictureInput');
    if (!profilePictureInput.classList.contains('d-none')) {
        profilePictureInput.classList.add('d-none');
    }
});

// Listen for changes in the file input
document.getElementById('profilePictureInput').addEventListener('change', function() {
    var profilePicture = document.getElementById('profilePicture');
    var fileInput = this;

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            profilePicture.src = e.target.result; // Update the profile picture with the selected image
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
});
