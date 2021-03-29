//storing value of form
const form = document.querySelector('.cani');
const loading = document.querySelector('.loading');
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
    console.log(cani)
    form.style.display = 'none';
    loading.style.display = '';
 })