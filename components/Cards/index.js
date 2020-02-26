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

axios.get('https://lambda-times-backend.herokuapp.com/articles').then (response => {
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
        cardDiv.classList.add('card');
       
     
        const headlineD = document.createElement('div');
        headlineD.classList.add('headline');
        headlineD.textContent = data.headline;

        const authorD = document.createElement('div');
        authorD.classList.add('author');
        

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('img-container');

        const authImg = document.createElement('img');
        authImg.src = data.authorPhoto;

        const authName = document.createElement('span');
        authName.textContent = `By ${data.authorName}`;

        cardDiv.append(headlineD);
        cardDiv.append(authorD);
        cardDiv.append(imageContainer);
        imageContainer.append(authImg);
        imageContainer.append(authName);

        return cardDiv;
    }