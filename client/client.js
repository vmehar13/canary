//const { response } = require("express");

//storing value of form
const form = document.querySelector('.coo');
const loading = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/coo';
 //set value of loading none.
 loading.style.display = 'none';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const coo = {
        name,
        content
    };

    form.style.display = 'none';
    loading.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(coo),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
      .then(createdCoo => {
          console.log(createdCoo)
          form.reset();
          form.style.display = "";
          loading.style.display = "none";
      })
 })