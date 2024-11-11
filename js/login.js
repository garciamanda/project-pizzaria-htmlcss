document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const iconClose = document.querySelector(".icon-close");

  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  wrapper.classList.add("active-popup");



  iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
    window.location.href = "index.html";
  });
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      window.location.href = 'index.html';
  } else {
      alert('Invalid credentials');
  }
});

