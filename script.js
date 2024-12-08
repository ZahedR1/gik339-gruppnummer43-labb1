// Uppgift 4: Skapa variabler
const checkbox = document.getElementById("divStyle"); // Checkbox
const textFields = document.querySelectorAll(".textfield"); // Alla textfält (via klassen)
const button = document.getElementById("removeDivButton"); // Knappen
const divElement = document.getElementById("dynamicDiv"); // Div-elementet


// Uppgift 5: Skapa en funktion
function handleTextInput(e) {
    console.log(`Event triggered by: ${e.target.name}`); // Logga vilket fält som triggar
    if (e.target.name === 'content') {
        divElement.innerHTML = e.target.value; // Uppdatera div:ens innehåll
    }
}

// Uppgift 6: Koppla eventlyssnare

// Eventlyssnare för checkboxen
checkbox.addEventListener('change', () => {
    const color = document.querySelector('#color').value; // Hämta värdet från färginput
    divElement.style.backgroundColor = color; // Sätt bakgrundsfärgen
});

// Eventlyssnare för textfälten
textFields.forEach(field => {
    field.addEventListener('input', handleTextInput); // Lyssna på input-event
});

// Eventlyssnare för knappen
button.addEventListener('click', () => {
    divElement.innerHTML = ""; // Rensar innehållet
    console.log('Div-elementet har tagits bort.');
});