/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <div class="img-container">
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    </div>
    <div class="right-button"> > </div>
  </div>
*/
const images = ["./assets/carousel/mountains.jpeg","./assets/carousel/computer.jpeg","./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"]


function Carousel(images){
  const carouselDiv = document.createElement('div');
  const leftButton = document.createElement('button');
  const imgContainer = document.createElement('div');
  const rightButton = document.createElement('button');
  const carouselContainer = document.querySelector('.carousel-container');

  //classlist
  carouselDiv.classList.add('carousel');
  leftButton.classList.add('left-button');
  imgContainer.classList.add('img-container');
  rightButton.classList.add('right-button');

  /*onclicks
  leftButton.addEventListener('click', cb);
  rightButton.addEventListener('click', cb);
  */

  //appending
  carouselContainer.append(carouselDiv);
  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(rightButton);

  images.forEach ( (images) => {//so in the forEach you're missing something that has a reference to the array index per TL
    carouselDiv.appendChild(imgContainer);
  })

  return carouselDiv;
}
Carousel();