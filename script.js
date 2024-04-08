const searchBarIput = document.getElementById('searchBarInput');

searchBarIput.addEventListener("keydown", function(event) {
  let wordsInput = searchBarInput.value.replaceAll(" ", "+");
  if (event.key === "Enter") {
    window.location.assign("https://www.google.com/search?q=" + wordsInput)
  } 
  console.log(searchBarIput);
});

const searchButton = document.getElementById('googleSearch');
searchButton.addEventListener('click', () => {
  let wordsInput = searchBarInput.value.replaceAll(" ", "+");

  window.location.assign("https://www.google.com/search?q=" + wordsInput);
});

const luckyButton = document.getElementById('luckyButton');


luckyButton.addEventListener('click', search);

function search() {
  const input = document.getElementById('searchBarInput').value;
  alert(input + "You've been hacked!");
  window.location.href = "https://www.google.com/search?q=" + input;
}


