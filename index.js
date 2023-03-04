
const loadAllHubs = async () => {
    // Spinner Showing for Loading the Data;
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    try {
        const res = await fetch(url)
        const data = await res.json()

        // See More Button Enable & Disable functionality;
        const seeMoreBtn = document.getElementById('seeMoreBtn');
        if (data.data.tools.length > 6) {
            seeMoreBtn.classList.remove('d-none')
            displayAllHubs(data.data.tools.slice(0, 6))
        }
    } catch (error) {
        console.log('Some Erros occurs:' + error);
    }
}


const displayAllHubs = (data) => {


    // Main divContainer;
    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML = '';
    data.forEach(tool => {
        
        // Destructuring the array;
        const { description, id, image, name, published_in, features, links } = tool;

       

        // Create a div for inserting element to the divContainer;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card p-3 mainCard">
                    <img src="${image ? image : '../images/error.gif'}" class="card-img-top rounded" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Features</h5>
                        <div>
                            <ol type="1" id="listItem">
                            <li>${features[0] ? features[0] : '<b class="text-danger">No Data Found</b>'}</li>
                            <li>${features[1] ? features[1] : '<b class="text-danger">No Data Found</b>'}</li>
                            <li>${features[2] ? features[2] : '<b class="text-danger">No Data Found</b>'}</li>
                            </ol>
                        </div>
                        <hr>
                        <h5>${name}</h5>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex gap-2 justify-content-start">
                            <div class="date-img">
                                <img src="../images/date.png" />
                            </div>
                            <div class="publish-data">
                                <p>${published_in}</p>
                            </div>
                    
                        </div>
                        <div>
                            <button onclick="CardDetails('${id}')" class="right-arrow" data-bs-toggle="modal" data-bs-target="#exampleModal"><span><img src="../images/right-arrow.png" /></span></button>
                        </div>
                    </div>
                </div>
        `
        // Inserted to the divContainer
        divContainer.appendChild(div);

        // spinner-stop
        toggleSpinner(false);
    })
        
}







// spinner-part
const toggleSpinner = isLoading=>{
    const sectionLoader = document.getElementById('loader')
    if(isLoading){
        sectionLoader.classList.remove('d-none');
    }
    else{
        sectionLoader.classList.add('d-none')
    }
}

// Call the loadHubs function;
loadAllHubs();

