function toggle_contact_form() {
    const formContainer = document.getElementById('contact-form-container');
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}