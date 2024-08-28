document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("encuesta-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 


        form.innerHTML = `
            <div class="thank-you-message">
                <h2>¡Gracias por Contactarte!</h2>
                <p>Nos pondremos en contacto contigo lo antes posible.</p>
            </div>
        `;

        document.querySelector(".thank-you-message").style.cssText = `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 10px;
        `;
        document.querySelector(".thank-you-message h2").style.cssText = `
            font-size: 2em;
            color: #48b04f;
        `;
        document.querySelector(".thank-you-message p").style.cssText = `
            font-size: 1.2em;
            color: #333;
        `;

        
    });
    
});
