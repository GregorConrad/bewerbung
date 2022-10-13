// holt sich Verbindung zu den Klassen die in den Klammern stehen aus kontakt.html
const form = document.querySelector(".result");
const p = document.querySelector(".send");
const button = document.querySelector(".button");

// Erkennt, dass Button geklickt wird und macht "Ihre Email wurde gesendet" schwarz
button.addEventListener("click", e => {
    p.style.cssText="color: black";
    // Kontaktformular wird zurückgesetzt 
    form.reset();
        
    // "Ihre Email wurde gesendet" wird nach Zeit: X wieder weiß 
    const timer = setTimeout(() => { 
        p.style.cssText="color: white";   
    }, 4000);
})