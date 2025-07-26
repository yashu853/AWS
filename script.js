const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };

    const res = await axios.post('http://localhost:3000/signup', user);

    message.style.color = 'green';
    message.textContent = 'Signup successful!';
    form.reset();
  } catch (err) {
    console.error(err);
    message.style.color = 'red';
    message.textContent = 'Error: ' + (err.response?.data?.message || 'Network Error');
  }
});
