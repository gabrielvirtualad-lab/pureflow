const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");
const thankYouMessage = document.getElementById("thankYouMessage");

leadForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(leadForm);

    try {
        const response = await fetch(leadForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            const name = document.getElementById("name").value;

            formMessage.textContent =
                `Thank you, ${name}! Your PUREFLOW request has been received.`;

            thankYouMessage.style.display = "block";

            leadForm.reset();
        } else {
            formMessage.textContent =
                "Something went wrong. Please try again.";
        }

    } catch (error) {
        formMessage.textContent =
            "Unable to submit your request. Please try again.";
    }
});