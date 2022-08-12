let btnSubmit = document.querySelector('.box-button');
let card = document.querySelector('.card');
let card2 = document.querySelector('.card2');

btnSubmit.addEventListener('click', () => {
	card2.classList.remove('fadeOut');
	card.classList.add('fadeOut');
	if(rating.textContent === ''){
		console.log(rating);
		alert('Choose your rating');
		window.location.reload();
	}
});

const rating = document.getElementById('rating');
const rates = document.querySelectorAll(".btn");

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.textContent;
    });
});