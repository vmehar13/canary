//storing value of form
const form = document.querySelector('.cani');
const loading = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/cani';
 //set value of loading none.
 loading.style.display = 'none';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const cani = {
        name,
        content
    };

    form.style.display = 'none';
    loading.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(cani),
        headers: {
            'content-type': 'application/json'
        }
    })
 })