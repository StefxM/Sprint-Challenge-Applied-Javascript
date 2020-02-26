// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then (response => {
    //console.log(response);// object
    //console.log(response.data.topics);// returns the array
    let topics = response.data.topics;
    topics.forEach( e => { // e for each one in the array
       tabContainer.append(newTab(e))
       })

    const newTab = topics => {
        const topicDiv = document.createElement('div');
        topicDiv.classList.add('tab');
        topicDiv.textContent = topics;// will be one of the parameters
    }
})

const tabContainer = document.querySelector('.tabs');
