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

function Header(date, temp) {
    const divx = document.createElement('div');
    divx.classList.add('header');

    const spanx = document.createElement('span')
    spanx.classList.add(date);
    
    
    const h1x = document.createElement('h1');
    h1x.textContent = "Lambda Times";

    const spanx2 = document.createElement('span');
    spanx2.classList.add(temp);

    divx.append(spanx);
    divx.append(h1x);
    divx.append(spanx2);
    headerContainer.append(Header(date, temp));
    return divx;
}
const headerContainer = document.querySelector('.header-container');
