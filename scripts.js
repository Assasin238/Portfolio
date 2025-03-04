const time = () =>{
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    setInterval(()=> {

        let currentTime = new Date ();

        hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
        minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
        seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    },1000)

}

const status = () =>{
    const now = new Date();
    const hours = now.getHours();
    const statusElement = document.getElementById("status-time");

    if (hours >= 13 && hours < 20) {
        statusElement.textContent = "Online";
        statusElement.style.color = "green";
    } else {
        statusElement.textContent = "Offline";
        statusElement.style.color = "red";
    }
}