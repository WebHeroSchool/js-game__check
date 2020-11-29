const levels = document.querySelectorAll('.lvl');
function chooseLevel() {
	levels.forEach(elem => {
		elem.addEventListener('click', () => {
			for (let i=0; i<levels.length; i++) {
				levels[i].style.listStyle = 'none';
			};
			elem.style.listStyleImage = 'url("img/Rectangle.png")';
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
	if ((lvlSimple.style.listStyle !== 'none') & (lvlMedium.style.listStyle === 'none') & (lvlComplex.style.listStyle === 'none')) {
		const simpleGame = document.querySelector('.simple-game');
		simpleGame.classList.remove('displayNone');
		// const random = getRandomNumber(1, 3) - 1;
	} else {
		if ((lvlMedium.style.listStyle !== 'none') & (lvlSimple.style.listStyle === 'none') & (lvlComplex.style.listStyle === 'none')) {
			const mediumGame = document.querySelector('.medium-game');
			mediumGame.classList.remove('displayNone');
			// const random = getRandomNumber(4, 9) - 1;
		} else {
			if ((lvlComplex.style.listStyle !== 'none') & (lvlMedium.style.listStyle === 'none') & (lvlSimple.style.listStyle === 'none')) {
				const complexGame = document.querySelector('.complex-game');
				complexGame.classList.remove('displayNone');
				// const random = getRandomNumber(10, 19) - 1;
			} 
			else {
				alert('Выберите уровень!');
				menu.classList.remove('displayNone');
			};
		};
	};
	// return random;
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

function getRandomNumber (min, max) {
  const d = max - min + 1;
  const result = min + Math.floor(Math.random() * d);
  return result;
}

console.log(random);

function getRandomCard() {
	const winningCard = document.createElement('img');
	winningCard.src = 'img/victory.png';
	cards[random].addEventListener('click', () => {
		const back = cards[random].children[1];
		console.log(back);
		back.children[0].style.display = 'none';
		console.log(back.children[0]);
		back.append(winningCard);
		winningCard.classList.add('card');
	});
}
getRandomCard();