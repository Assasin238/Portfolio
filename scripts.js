const time = () =>{
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

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
        statusElement.style.color = "#0d9e7a";
    } else {
        statusElement.textContent = "Offline";
        statusElement.style.color = "#FFA8D7";
    }
}

const image = () =>{
    // select image element
    const img = document.getElementById("images");
    // listen for the click event
    // store images
    const images = 
    [
        'images\\picture.jpg',
        'images\\dog-picture.jpg',
        'images\\game-picture.png'
    ];

    let index = 0;
    img.addEventListener('click', function()
    {
        index = (index + 1) % images.length;
        img.src = images[index];
        
    })
}

const background = () => {
    let darkmode = localStorage.getItem('darkmode');
    const background = document.getElementById('background');

    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
    }

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
    }

    if (darkmode === "active") enableDarkmode()

    background.addEventListener("click", () =>{
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
}
