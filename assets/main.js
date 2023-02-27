let scoresDiv = document.querySelector(".scores");
let total = document.querySelector(".total");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    let scoreArr = [];
    data.map((score) => {
      scoresDiv.innerHTML += `
            
            <div class="score">
            <img src=${score.icon} alt="" />
            
            <p class="score_category">${score.category}</p>
            <p class="score_goten">${score.score}<span> / 100</span></p>
            </div>
            
            `;
      scoreArr.push(score.score);
    });
    const average = Math.round(
      scoreArr.reduce((acc, currentVal) => acc + currentVal) / scoreArr.length
    );
    total.innerHTML += `${average}<span>of 100</span>`;
  });
