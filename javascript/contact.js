function sendForm(prev) {
  prev.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: "text/plain, application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err));

  document.querySelector(".form-sent").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

document.querySelector("#submit-btn").addEventListener("click", sendForm);

