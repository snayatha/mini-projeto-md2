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

 if (ageinput.value === ""){
    alert("por favor, preencha sua idade");
    return;
 }

 if (jobselect.value === ""){
    alert("por favor, selecione uma opção");
    return;
 }

 if (messagetextarea.value === ""){
    alert("por favor, escreva uma mensagem");
    return;
 }


form.submit();
})

function isEmailValid(email) {
    const emailregex = new RegExp (
        /^[a-zA-Z0-9._-]+@{a-zA-Z0-9._-}+\.[a-zA-Z]{2,}$/);
    
        if(emailregex.test(email)) {
            return true;
        }
            return false;
    }