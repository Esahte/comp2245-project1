/* Add your JavaScript to this file */
"use strict";

window.onload = function() {
    // Add event listener to the subscription button
    document.getElementsByClassName('btn')[1].addEventListener('click', event => {
        // Prevent the default behaviour of the button
        event.preventDefault();
        // Get the email address
        let email = document.getElementById('email').value;
        // Check if the email address is empty
        if (email === '') {
            document.getElementsByClassName('message')[0].innerHTML = 'Please enter a valid email address';
            document.getElementsByClassName('message')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('message')[0].innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
            document.getElementsByClassName('message')[0].style.display = 'block';
        }
    });
}