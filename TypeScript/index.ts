// Данные о шариках
const BALLONS = {
	red: { id: 202, isPublic: true },
	blue: { id: 356, isPublic: false },
  yellow: { id: 451, isPublic: false },
	black: { id: 35, isPublic: true },
	green: { id: 191, isPublic: true },
	white: { id: 911 },
};

// Имитация fetch, принимает цвет по айдишнику
async function fetchBallonAmount(id) {
  const RANDOM_TIMEOUT: number = Math.ceil(Math.random() * 10000); // 1-9 секунд
	const RANDOM_AMOUNT: number = Math.ceil(Math.random() * id); // случайное число

	return new Promise(resolve => setTimeout(() => resolve(RANDOM_AMOUNT), RANDOM_TIMEOUT));
  // Возвращает количество шариков заданного цвета
}


// Ваш код здесь
