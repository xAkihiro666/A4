document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const tpass = document.getElementById("password");
  const temail = document.getElementById("email");
  const logForm = document.querySelector('.login');
  const regForm = document.querySelector('.register');
  const holder = document.querySelector('.log');
  const logme = document.querySelector('.logme');
  const btns = document.querySelector('.Btns');
  const agree = document.querySelector('.agree');
  const cookies = document.querySelector('.cookies');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        navLinks.classList.add('active');
      } else {
        navLinks.classList.remove('active');
      }
    });
  }

  if (logme && holder) {
    logme.addEventListener('click', (e) => {
      holder.style.display = 'block';
    });
  }

  if (agree && cookies) {
    agree.addEventListener('click', (e) => {
      cookies.style.display = 'none';
    });
  }

  if (btns) {
    btns.addEventListener('click', (e) => {
      const email = temail.value;
      const password = tpass.value;

      if (!isValidEmail(email)) {
        swal("Error", "Invalid email format.", "error");
        e.preventDefault();
      } else if (!Checker(email, password)) {
        swal("Error", "Incorrect Email or Password.", "error");
      } else if (email !== '' && password !== '') {
        holder.style.display = 'none';
        loginSuccess();
      } else {
        swal("Error", "Email and Password cannot be empty.", "error");
      }
    });
  }

  function Checker(email, password) {
    const usernames = ["akihiroakio47@gmail.com", "judeko@gmail.com"];
    const passwords = ["12345", "9851"];
    const index = usernames.indexOf(email);

    if (index !== -1 && passwords[index] === password) {
      return true;
    } else {
      return false;
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function loginSuccess() {
    swal("Success", "You have successfully logged in.", "success");
  }

  document.onkeydown = function keyPress(e) {
    if (e.key === "Escape") {
      if (holder) {
        holder.style.display = 'none';
      }
    }
  };
});
