const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingCounerE1 = document.getElementById("remaining-counter");
textareaE1.addEventListener("keyup", ()=>{
    updateCounter()
});

updateCounter()
// character counter 
function updateCounter() {
    totalCounterE1.innerText = textareaE1.value.length;
    remainingCounerE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}

