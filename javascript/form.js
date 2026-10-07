
const contactform = document.querySelector("#contact")

const formsec = [
    { id: "naam", message: "vul min. 2 tekens in" },
    { id: "email", message: "vul een geldig E-mailadres in" },
    { id: "bericht", message: "vul tenminste 10 tekens in" },

]

function validate(field) {
    const input = document.querySelector(`#${field.id}`);
    const error = document.querySelector(`#${field.id}-error`);
    const valid = input.checkValidity();

    input.setAttribute("aria-invalid", String(!valid));
    error.textContent = valid ? "" : field.message;
    return valid;
}

contactform.addEventListener("submit", (event) => {
    event.preventDefault();

    const validityScan = formsec.map(validate).every(Boolean);
    const status = document.querySelector("#form-status");

    if (!validityScan) {
        status.textContent = "Er zijn nog fouten in het formulier.";
        return;
    }
    status.textContent = "Bericht verzonden! Bedankt.";
    form.reset();


})