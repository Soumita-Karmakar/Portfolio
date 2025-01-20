// For Menu Icon
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Automatic Typping Effect

const typed = new Typed('.typedText', {
    strings: ['Frontend Developer','Web Developer', 'Backend Developer'],
    typeSpeed: 80,
    backspeed:80,
    backDelay:1200,
    loop:true
});

// Send Email Function

function sendEmail(){
    let params = {
        name :document.getElementById("name").Value,
        email :document.getElementById("email").Value,
        subject :document.getElementById("subject").Value,
        message :document.getElementById("message").Value,
        
    };

    const serviceID = "service_0ex1fri";
const templateID = "template_b646ou7"
    emailjs.send("service_0ex1fri","template_b646ou7",params)
    .then(
        res => {
            document.getElementById("name").Value="";
            document.getElementById("email").Value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Your Message Sent Successfullty!")

        }
    )
.catch((err) => console.log(err));

}





