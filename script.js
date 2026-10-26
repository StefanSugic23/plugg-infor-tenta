
// ==========================================
// 1. DOM – SKAPA ELEMENT OCH LÄGG TILL DEM
// ==========================================

// document betyder hela HTML-dokumentet.
// querySelector() söker efter det första HTML-elementet som matchar en CSS-selektor.
// "#domLista" betyder att vi söker efter ett element med id="domLista".
// const sparar referensen till elementet i variabeln domLista.
const domLista = document.querySelector("#domLista");

// Vi skapar två nya HTML-element av typen <li>.
// createElement() skapar elementet, men lägger inte till det på webbsidan ännu.
const li1 = document.createElement("li");
const li2 = document.createElement("li");

// Vi skapar två <p>-element som ska innehålla text.
// Varje p-element är ett separat element.
const textLi1 = document.createElement("p");
const textLi2 = document.createElement("p");

// textContent bestämmer vilken text som ska finnas inuti ett element.
// Här lägger vi text i våra två p-element.
textLi1.textContent = "LI text";
textLi2.textContent = "LI text 2";

// appendChild() lägger ett element inuti ett annat element.
// Här placerar vi varje p-element inuti sitt eget li-element.
li1.appendChild(textLi1);
li2.appendChild(textLi2);

// Nu lägger vi våra li-element inuti ul-elementet i HTML.
// Elementen blir synliga på webbsidan när de läggs in i DOM-trädet.
domLista.appendChild(li1);
domLista.appendChild(li2);


// ==========================================
// 2. KOMBINERA DOM OCH CSS MED classList
// ==========================================

// Vi hämtar HTML-elementet som har id="namn".
// I din HTML är det p-elementet som innehåller "Zlatan Ibrahimovic".
const namn = document.querySelector("#namn");

// classList ger oss möjlighet att lägga till, ta bort eller växla CSS-klasser.
// add("changeColor") lägger till klassen changeColor på elementet.
// Klassen måste finnas definierad i din CSS för att ge någon synlig effekt.
namn.classList.add("changeColor");


// ==========================================
// 3. DOM – TA BORT ETT ELEMENT
// ==========================================

// Vi hämtar ul-elementet som har id="domListaRemove".
const domListaRemove = document.querySelector("#domListaRemove");

// Vi skapar två nya li-element.
const li3 = document.createElement("li");
const li4 = document.createElement("li");

// Vi skapar ett p-element för texten i varje li-element.
const textLi3 = document.createElement("p");
const textLi4 = document.createElement("p");

// Vi bestämmer texten i de två p-elementen.
textLi3.textContent = "Li text 3";
textLi4.textContent = "Li text 4";

// Vi placerar p-elementen inuti respektive li-element.
li3.appendChild(textLi3);
li4.appendChild(textLi4);

// Vi lägger till båda li-elementen i vår ul-lista.
// Ordningen blir li3 först och li4 sist.
domListaRemove.appendChild(li3);
domListaRemove.appendChild(li4);

// removeChild() tar bort ett direkt underordnat element från föräldern.
// Här tar vi bort li4 från ul-listan.
// Resultatet är att bara "Li text 3" finns kvar i listan.
domListaRemove.removeChild(li4);


// ==========================================
// 4. addEventListener – ÄNDRA TEXT MED EN KNAPP
// ==========================================

// Vi hämtar knappen med id="changeText" från HTML.
const knapp = document.querySelector("#changeText");

// Vi hämtar p-elementet vars text vi vill ändra.
const vanligText = document.querySelector("#vanligText");

// addEventListener() lyssnar efter en händelse.
// "click" betyder att vi väntar på att användaren klickar på knappen.
// function() innehåller koden som ska köras när klicket sker.
knapp.addEventListener("click", function() {

    // När användaren klickar ändras texten i p-elementet.
    // Den gamla texten "Change this text" ersätts.
    vanligText.textContent = "text is changed";

});


// ==========================================
// 5. FORMULÄR – LÄGG TILL NAMN OCH ÅLDER
// ==========================================

// En tom array där vi sparar de objekt som användaren lägger till.
// Informationen finns bara i JavaScript-minnet.
// Om sidan laddas om försvinner informationen.
let items = [];

// Vi hämtar formuläret med id="myForm".
const form = document.querySelector("#myForm");

// Vi hämtar inputfältet där användaren skriver sitt namn.
const nameInput = document.querySelector("#name");

// Vi hämtar inputfältet där användaren skriver sin ålder.
const ageInput = document.querySelector("#age");

// Vi hämtar p-elementet där felmeddelanden ska visas.
const errorMsg = document.querySelector("#errorMsg");

// Vi hämtar ul-elementet där vi ska visa alla sparade objekt.
const formList = document.querySelector("#formList");


// ==========================================
// 6. render() – VISA ALLA OBJEKT I HTML
// ==========================================

// Vi skapar en funktion som visar innehållet i items på webbsidan.
// Funktionen körs när vi vill uppdatera listan.
function render() {

    // Vi tömmer innehållet i formList innan vi ritar listan igen.
    // Det förhindrar att samma objekt visas flera gånger vid varje uppdatering.
    formList.textContent = "";

    // En for-loop går igenom arrayen från index 0 till sista indexet.
    // items.length anger hur många objekt arrayen innehåller.
    for (let i = 0; i < items.length; i++) {

        // Vi skapar ett p-element som ska innehålla information om en person.
        const li = document.createElement("p");

        // Vi skapar ett p-element för personens namn.
        const nameText = document.createElement("p");

        // Vi skapar ett p-element för personens ålder.
        const ageText = document.createElement("p");

        // items[i] hämtar objektet på den aktuella positionen i arrayen.
        // .name hämtar objektets name-egenskap.
        // Vi kombinerar texten "namn: " med personens namn.
        nameText.textContent = "namn: " + items[i].name;

        // .age hämtar objektets age-egenskap.
        // Vi kombinerar texten "age: " med personens ålder.
        ageText.textContent = "age: " + items[i].age;

        // Vi placerar namnets p-element inuti det yttre p-elementet.
        li.appendChild(nameText);

        // Vi placerar ålderns p-element inuti samma yttre p-element.
        li.appendChild(ageText);

        // Vi lägger till det yttre elementet i formList.
        // På så sätt visas informationen på webbsidan.
        formList.appendChild(li);

    } // Här slutar for-loopen.

} // Här slutar render-funktionen.


// ==========================================
// 7. SUBMIT – TA EMOT FORMULÄRETS INFORMATION
// ==========================================

// Vi lyssnar efter submit-händelsen på formuläret.
// Händelsen inträffar när användaren skickar formuläret.
form.addEventListener("submit", function(event) {

    // Vi stoppar webbläsarens vanliga formulärbeteende.
    // Annars kan sidan laddas om när formuläret skickas.
    event.preventDefault();

    // .value hämtar det användaren har skrivit i namn-fältet.
    // trim() tar bort onödiga mellanslag i början och slutet.
    const name = nameInput.value.trim();

    // Vi hämtar åldern från inputfältet och tar bort yttre mellanslag.
    // Även ett number-input ger normalt sitt värde som en sträng.
    const age = ageInput.value.trim();

    // Vi kontrollerar om namnet ELLER åldern är tom.
    // || betyder ELLER.
    // Om minst ett fält är tomt körs koden inuti if-blocket.
    if (name === "" || age === "") {

        // Vi visar ett felmeddelande på webbsidan.
        errorMsg.textContent = "cannot be empty";

        // return avslutar den aktuella funktionen.
        // Då skapas inget objekt om ett fält är tomt.
        return;

    } // Här slutar if-blocket.

    // Vi skapar ett objekt som innehåller användarens information.
    const newObject = {

        // Egenskapen name får värdet från variabeln name.
        name: name,

        // Egenskapen age får värdet från variabeln age.
        age: age

    }; // Här slutar objektet.

    // push() lägger till det nya objektet sist i arrayen items.
    items.push(newObject);

    // Vi kör render() för att visa den uppdaterade arrayen i HTML.
    render();

    // OBS: Din ursprungliga kod tömmer inte formuläret
    // och tar inte bort felmeddelandet efter en lyckad inskickning.

}); // Här slutar submit-eventet.
