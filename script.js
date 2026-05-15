function fetchData() {
    // Mock backend response
    const data = {
        message: "Hello from mock backend!",
        items: ["Setup", "Biaya", "Bandwidth", "Backend"]
    };
    document.getElementById('data').innerHTML = `<p>${data.message}</p><ul>${data.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Mock submission
    document.getElementById('formResponse').innerHTML = `<p>Thank you, ${name}! Your message has been submitted (mock).</p>`;
    // Clear form
    document.getElementById('contactForm').reset();
});