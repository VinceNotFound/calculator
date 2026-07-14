let expression = "";

function press(value){
    expression += value;
    document.getElementById("display").value = expression;
}

function clearDisplay(){
    expression = "";
    document.getElementById("display").value = "";
}

function calculate(){

    const popup = document.getElementById("popup");

    popup.style.display = "flex";

    popup.innerHTML = `
    <div class="popup-content">
        <h1>🧠 Ultra Calculator AI</h1>

        <h2 id="loadingText">Initializing Arithmetic Engine...</h2>

        <div class="loader"></div>

        <p>Please wait...</p>
    </div>
    `;

    const messages = [
    "Initializing Arithmetic Engine...",
    "Downloading More Numbers...",
    "Contacting NASA...",
    "Verifying 1 + 1...",
    "Teaching AI Basic Math...",
    "Loading Calculator DLC...",
    "Buying Extra RAM...",
    "Searching Stack Overflow...",
    "Calculating Pi...",
    "Negotiating with Isaac Newton...",
    ];

    let i = 0;

    const interval = setInterval(() => {

        document.getElementById("loadingText").innerText = messages[i];

        i++;

        if(i >= messages.length){

            clearInterval(interval);

            popup.innerHTML = `
            <div class="popup-content">

                <h1>🔒 Premium Required</h1>

                <img src="gcash.png">

                <h2>Please support the developer to unlock arithmetic.</h2>

                <p>
                This calculator has detected that addition,
                subtraction, multiplication and division
                are Premium Features.
                </p>

                <h3>Subscribe for only ₱99.99/month</h3>

                <button onclick="closePopup()">
                    Maybe Later
                </button>

            </div>
            `;
        }

    },900);

}

function closePopup(){
    document.getElementById("popup").style.display="none";
}