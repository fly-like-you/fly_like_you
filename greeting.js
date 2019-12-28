const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "current user",
SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const cucrrentUser = localStorage.getItem(USER_LS);
    if (cucrrentUser === null){
        
    } else{
        paintGreeting(cucrrentUser);
    }


}
function init() {
    loadName();
}

loadName();
