export const getRandomGoobWord = allGoobWords => {
	return allGoobWords[Math.floor(Math.random() * allGoobWords.length)];
};
