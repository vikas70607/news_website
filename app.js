console.log("this is app.js");
// 60f690eeaa534b108dd4f0bbace1864f

let newsacc = document.getElementById('newsacc');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-03&sortBy=publishedAt&apiKey=60f690eeaa534b108dd4f0bbace1864f', true)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json); 
        let articles = json.articles;

        let newshtml = '';
        articles.forEach(function(element) {
            
            let news = `
            <div class="accordion" id="accordionExample">
            <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <p>${element["title"]}</p>
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      <p>
      ${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a>
      </p>
    </div>
  </div>
  </div>`;
            
            newshtml += news;
        });
        newsacc.innerHTML = newshtml;
    }
    else {
        console.log("some error occured")
    }
}

xhr.send();

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p"
        )[0].innerText;
        let cardTxt1 = element.getElementsByTagName("p"
        )[1].innerText;
        if(cardTxt.includes(inputVal) || cardTxt1.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})