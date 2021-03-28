const form = document.querySelector('.cani')

form.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const cani = {
        name,
        content
    };
    console.log('he;; np')
 })