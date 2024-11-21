const login = document.getElementById("logMe");
const register = document.getElementById("regMe");
const logForm = document.querySelector('.login');
const regForm = document.querySelector('.register');
const regH = document.getElementById("regHere");
const logH = document.getElementById("logHere");
const holder = document.querySelector('.log');
const tpass = document.getElementById("password");
const pass = document.getElementById("new-password")
const con_pass = document.getElementById("con-password");
const notificationContainer = document.getElementById('notification-container');
const names = ["David Washington", "Azurite Zor-El", "Alex Fleming"];
const plans = [{
    name: "Discord Bot 256MB",
    image: "images/ruby.png"
},{
    name: "Discord Bot 512MB",
    image: "images/sapphire.png"
},{
    name: "Discord Bot 1GB",
    image: "images/peridot_gem.png"
},{
    name: "Discord Bot 2GB",
    image: "images/red_garnet.png"
}]
let isHidden = false;

function showNotification() {
    const userName = names[Math.floor(Math.random() * names.length)];
    const plan = plans[Math.floor(Math.random() * plans.length)];

    document.getElementById('user-name').innerText = userName;
    document.getElementById('plans-name').innerText = "Purchased " + plan.name;
    document.getElementById('plans-image').innerHTML = `<img src="${plan.image}">`;

    notificationContainer.style.visibility = 'visible';
    notificationContainer.style.opacity = '1';

    setTimeout(() => {
        notificationContainer.style.opacity = '0';
    }, 4500);

    setTimeout(() => {
        notificationContainer.style.visibility = 'hidden';
    }, 5000);
}

function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function scheduleNextNotification() {
    const interval = getRandomInterval(5000, 10000); 
    setTimeout(() => {
        showNotification();
        scheduleNextNotification();
    }, interval);
}

scheduleNextNotification();

function checkPassword(event){
    if(pass.value != con_pass.value) {
        swal("Error", "Password does not match!", "error");
        event.preventDefault();
    }else{
        swal("Success", "You have successfully registered.", "success");
        
    }
}

regHere.onsubmit = checkPassword;

function loginSucces(event) {
    event.preventDefault();
    
    if(tpass.value != '') {
        swal("Success", "You have successfully logged in.", "success");
        
        setTimeout(() => {
            window.location.href = "A2/index.html";
        }, 1500);
    } else {
        swal("Error", "Please enter your password.", "error");
    }
}

logHere.onsubmit = loginSucces;

login.addEventListener('click', () => {
    logForm.style.display = 'flex';
    holder.style.display = 'flex';
    document.body.style.overflow = 'hidden';
})

register.addEventListener('click', () => {
    regForm.style.display = 'flex';
    holder.style.display = 'flex';
    document.body.style.overflow = 'hidden';
})

document.querySelectorAll('.log-register a').forEach(anchoor => {
    anchoor.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.innerText == "Register") {
            regForm.style.display = 'flex';
            logForm.style.display = 'none';
        } else if (this.innerText == "Login") {
            logForm.style.display = 'flex';
            regForm.style.display = 'none';
        }
    });
});


holder.addEventListener('click', () => {
    regForm.style.display = 'none';
    holder.style.display = 'none';
    logForm.style.display = 'none';
    document.body.style.overflow = 'visible';
})

document.addEventListener('keydown', function(event) { 
    if(event.key == "p"){
        if(isHidden == false){
            notificationContainer.style.display = "none";
        }else{
            notificationContainer.style.display = "flex";
        }
    }
    isHidden = !isHidden;
 });


// Not Yet Added
// document.querySelector('.hamburger-menu').addEventListener('click', function() {
//     this.classList.toggle('open');
// });


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
