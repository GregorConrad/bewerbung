const form = document.querySelector(".result");
const p = document.querySelector(".send");
const button = document.querySelector(".button");

button.addEventListener("click", e => {
    p.style.cssText="color: black";
    form.reset();
    
    const timer = setTimeout(() => { 
        p.style.cssText="color: white";   
    }, 4000);
})