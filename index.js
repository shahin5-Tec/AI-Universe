
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

// Data pass to the Frontend;
const displayAllHubs = tools => {
    const toolsContainer = document.getElementById('tools-container')
   
   
    tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div class="card h-100">
                 <img src="${tool.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4>Features</h4>
                <h5 class="card-title"></h5>
                <p class="card-text">
                <ol id = "${tool.id}"></ol>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
          </div>
         <div class=" mx-5">
             <hr> ${tool.name}
            </div> 
      </div>
        `;
        // append child
        toolsContainer.appendChild(toolDiv)
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

