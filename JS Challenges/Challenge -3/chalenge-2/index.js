const form = document.querySelector('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const data = new FormData(e.target);
    const weight = data.get('weight');
    const height = data.get('height');
    const bmi = (weight / ((height * height) / 10000 )).toFixed(2)
    console.log(bmi);
    const result = document.querySelector('h3');
    result.innerText = bmi;
    
})

