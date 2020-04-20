// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function HeaderComponent() {
  //elements
  let headerDiv = document.createElement('div');
  let spanDate = document.createElement('span');
  let titleH1 = document.createElement('h1');
  let tempSpan = document.createElement('span');
  let headerContainer = document.querySelector('.header-container');

      //class
    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    tempSpan.classList.add('temp');
  
    
    //content
    spanDate.textContent = `MARCH 28, 2010`;
    titleH1.textContent = `Lambda Times`;
    tempSpan.textContent = `98°`;

    //append
    headerContainer.appendChild(headerDiv);
    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(titleH1);
    headerDiv.appendChild(tempSpan);

    console.log(headerDiv);
    return headerDiv;
}

HeaderComponent();