function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;

}

function changeCircleColor(color){
    const circle =  document.querySelector('.circle');
    circle.style.background = color;
}


function handleEmail(){
    var input = document.getElementById('email').value;
    

    document.getElementById('email').value = '';
    document.getElementById('name').value = '';

    localStorage.setItem('email', input);
    alert('Email enviado com sucesso!');
  
    
}
