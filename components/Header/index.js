// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const divx = document.createElement('div');
    divx.classList.add('header');

    const spanx = document.createElement('span')
    spanx.classList.add('date');
    spanx.textContent = "March 28, 2019"
    
    const h1x = document.createElement('h1');
    h1x.textContent = "Lambda Times"

    const spanx2 = document.createElement('span');
    spanx2.classList.add('temp');
    spanx2.textContent = "98°"

    .header-container.appendChild(divx);
    .header-container.appendChild(spanx);
    .header-container.appendChild(h1x);
    .header-container.appendChild(spanx2);

    return divx;
}

