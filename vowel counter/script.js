function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < name.length; i++) {
      if (vowels.indexOf(name[i]) !== -1) {
        count++;
      }
    }
    return count;
  }

  const nameInput = document.getElementById("name-input");
  const countButton = document.getElementById("count-button");
  const resultDiv = document.getElementById("result");

  countButton.addEventListener("click", function() {
    const name = nameInput.value;
    const vowelCount = countVowels(name);
    resultDiv.textContent = `The name "${name}" has ${vowelCount} vowels.`;
  });