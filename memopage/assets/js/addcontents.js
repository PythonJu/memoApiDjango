<<<<<<< HEAD
// document.getElementById('create_toggle_button').addEventListener('click', function() {
//     const form = document.getElementById('create_form');
//     if (form.style.display === 'none') {
//         form.style.display = 'block';
//     } else {
//         form.style.display = 'none';
//     }
// });


document.getElementById('create_toggle_button').addEventListener('click', () => {
    showToggle();
});
=======
document.getElementById('create_toggle_button').addEventListener('click', showToggle());
>>>>>>> 2e576d529c3594434eeb2130026729619cb79a8d

function showToggle(){
    const form = document.getElementById('create_form');
    if(form.style.display === 'none'){
        form.style.display = 'block';
    }else{
        form.style.display = 'none';
    }
}