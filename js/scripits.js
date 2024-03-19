const form = document.querySelector("#form")
const nameinput = document.querySelector("#name")
const emailinput = document.querySelector("#email")
const ageinput = document.querySelector("#age")
const jobselect = document.querySelector("#job")
const messagetextarea = document.querySelector("#message")

form.addEventListener ("submit", (event) => {
 event.preventDefault();

 if (nameinput.value === ""){
    alert("por favor, preencha seu nome");
    return;
 }

 if (emailinput.value === ""){
    alert("por favor, preencha seu email");
    return;
 }


})