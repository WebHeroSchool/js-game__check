const levels = document.querySelectorAll('.lvl');
function chooseLevel() {
	levels.forEach(elem => {
		elem.addEventListener('click', () => {
			for (let i=0; i<levels.length; i++) {
				levels[i].style.listStyle = 'none';
			};
			elem.style.listStyleImage = 'url("img/Rectangle.png")';
			console.log(elem);

			for (let i=0; i<levels.length; i++) {
				console.log(levels[i].style.listStyle);
			};
		});
	});
}
chooseLevel();


const lvlSimple = levels[0];
const lvlMedium = levels[1];
const lvlComplex = levels[2];
const btnStart = document.querySelector('.start');
btnStart.addEventListener('click', startGame);

function startGame() {
	const menu = document.getElementById('menu');
	menu.classList.add('displayNone');
	if (lvlSimple.style.listStyle !== 'none') {
		console.log('simple');
		const simpleGame = document.querySelector('.simple-game');
		simpleGame.classList.remove('displayNone');
	} else {
		if (lvlMedium.style.listStyle !== 'none') {
			console.log('Medium');
			const mediumGame = document.querySelector('.medium-game');
			mediumGame.classList.remove('displayNone');
		} else {
			const complexGame = document.querySelector('.complex-game');
			complexGame.classList.remove('displayNone');
			console.log('complex');
		}
	}
}

const cards = document.querySelectorAll('.cell');
function flipTheCard() {
	cards.forEach(elem => {
		elem.addEventListener('click', () => {
			elem.classList.toggle('rotate');
		});
	});
}
flipTheCard();

