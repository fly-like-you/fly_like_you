const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = minutes<10 ? `${hours}:0${minutes}:0${seconds}` : `${hours}:${minutes}:${seconds}` ;
    //if minutes <10 innerText$
}
function init(){
    getTime();
    setInterval(getTime,1000);

}

init();