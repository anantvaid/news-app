console.log("My program should work");

if (!navigator.onLine) {
  document.getElementById("layout").innerHTML = `SORRY YOU'RE OFFLINE`;
}

// document.getElementById("submitBtn").addEventListener("click", event => {
//   event.preventDefault();
//   console.log("here");
//   const val = document.getElementById("submitTxt").value;
//   console.log(val);
// });

let c = 1;

const checkResponse = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const func = articles => {
  articles.forEach(article => {
    if (c <= 9) {
      if (article.description.length > 200) {
        article.description = article.description.slice(0, 200) + "...";
      }
      document.getElementById(
        "layout"
      ).innerHTML = design += `<div class="col-md-4 my-3">
    <div class="card" style="border-radius: 5%; height:500px;">
      <div class="card-body">
      <img src="${article.urlToImage}" class="card-img-top" alt="" style="border-radius: 5%;">
        <h5 class="card-title my-2">${article.title}</h5>
        <p class="card-text">
          ${article.description}
        </p>
        <a href="${article.url}" target="_blank" style="display: block;
        margin: 0 auto;position:absolute;bottom:3px">Learn More</a>
      </div>
    </div>
    </div>`;
    }
    c++;
  });
};

let design = ``;

const MY_API_KEY = `3b1ee75657f04f68860596cb7ccf2ae1`;
const country = "in";

async function getData() {
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${MY_API_KEY}`
  );
  checkResponse(response);
  console.log("YEP WE'RE HERE!");
  let data = await response.json();
  return data;
}

getData().then(data => func(data.articles));
