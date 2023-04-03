const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const resultMessage = document.getElementById("result");

submitButton.addEventListener("click", () => {
	const name = nameInput.value;
	const capitalized = name[0].toUpperCase() + name.slice(1);
	resultMessage.textContent = `Hello, ${capitalized}!`;
});