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
        statusElement.style.color = "green";
    } else {
        statusElement.textContent = "Offline";
        statusElement.style.color = "red";
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
    
}

// toggle = !toggle;
//         if(toggle)
//         {
//             img.src = 'images\\picture.jpg'; 
//             img.src = 'images\\dog-picture.jpg';
//         }
        
//         else{
//             img.src = 'images\\game-picture.png';  
//         }