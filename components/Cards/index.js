// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles/`).then (response => {
    console.log(response);
    let articles = response.data.articles.javascript;
    articles.forEach (e => {
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.append(newArticles(e))
    })})

const newArticles = data => {
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
        const cardDiv = document.createElement('div');
        const headlineD = document.createElement('div');
        const authorD = document.createElement('div');
        const imageContainer = document.createElement('div');
        const authImg = document.createElement('img');
        const authName = document.createElement('span');


        cardDiv.classList.add('card');
        headlineD.classList.add('headline');
        authorD.classList.add('author');
        imageContainer.classList.add('img-container');
      

        headlineD.textContent = data.headline;
        authImg.src = data.authorPhoto;
        authName.textContent = `By ${data.authorName}`;

        cardDiv.appendChild(headlineD);
        cardDiv.appendChild(authorD);
        cardDiv.appendChild(imageContainer);
        cardDiv.appendChild(authImg);
        cardDiv.appendChild(authName);

        return cardDiv;
    }