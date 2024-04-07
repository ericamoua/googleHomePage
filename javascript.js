// document.getElementById('northCoast').addEventListener('ticketDrops', function(){
//   buyTickets();
// });
const searchBarIput = document.getElementById('searchBarInput');

searchBarIput.addEventListener("keydown", function(event) {
  let wordsInput = searchBarInput.value.replaceAll(" ", "+");
  if (event.key === "Enter") {
    window.location.assign("https://www.google.com/search?q=" + wordsInput)
  }
});

const searchButton = document.getElementById('googleSearch');
searchButton.addEventListener('click', () => {
  let wordsInput = searchBarInput.value.replaceAll(" ", "+");

  window.location.assign("http://127.0.0.1:5500/" + wordsInput);
});

const luckyButton = document.getElementById('luckyButton');


luckyButton.addEventListener('click', search);

function search() {
  const input = document.getElementById('searchBarInput').value;
  alert(input + "You've been hacked!");
  window.location.href = "http://127.0.0.1:5500/" + input;
}


// document.getElementById('gooogleSearch').addEventListener('keyDown', function () {
//   let searchBarInput = document.getElementById('searchBarInput').value;
//   searchBarInput = searchBarInput.replaceAll(' ', '+') 
//   alert('https://www.google.com/search?q=' + searchBarInput);
  //window.location.href('https://www.w3schools.com/');
  //'https://www.google.com/search?q=' + searchBarInput
// });

// const searchBarInput = document.getElementById('googleSearch').value;

// document.getElementById('googleSearch') = <button id="googleSearch">Google Search</button>

// document.getElementById('searchBarInput') = <input id="searchBarInput">anyting the user searches</input>
// document.getElementById('searchBarInput').value = anyting the user searches



// search breakaway              document.getElementById
// when breakaway ticekts drop   .addEventListener

// then search northcoast         document.getElementById
// want to look at lineup         .value

