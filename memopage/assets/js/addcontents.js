document.getElementById('create_toggle_button').addEventListener('click', showToggle());

function showToggle(){
    const form = document.getElementById('create_form');
    if(form.style.display === 'none'){
        form.style.display = 'block';
    }else{
        form.style.display = 'none';
    }
}