function getProject() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
        console.log(res)
        let apiData = "";
        res.slice(0, 3).forEach((project) => {
        apiData += `
        <div class="card">
            <div class="card-img">
            <img src="../img/${project.id}.jpg" alt="Information about ${project.title}">
            </div>
            <div class="card-text">
                <div class="card-title">
                    <h3>${project.title}</h3>
                </div>
                <div class="card-body">
                    <p>${project.body}</p>
                </div>
                <div class="card-link">
                    <a href="project.html" target="_blank">Learn More</a>
                </div>
                
            </div>
        </div>
                `;
        console.log(apiData)});
        document.querySelector(".cards-container").innerHTML = apiData;
    });
}

getProject()

function getOneProject() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((res) => {
        console.log(res)
        let apiData = `<h1>${res.title}</h1>
        <div class="project-info">
            <h2>UI Design & App Development</h2>
            <p>Completed on <span>2/2/22</span></p>
        </div>
        <div class="big-img">
            <img class="cover-img" src="https://uploads-ssl.webflow.com/61fead28c13f346b71e5645f/61feadb7386a4ce8e1606b95_1-p-1080.jpeg"" alt="simplify-img">
            <img class="blurred-img" src="https://uploads-ssl.webflow.com/61fead28c13f346b71e5645f/61feadb7386a4ce8e1606b95_1-p-1080.jpeg"" alt="simplify-img">
        </div>
        <div class="project-text">
            <p>${res.body}</p>
        </div>`;

        document.querySelector("#big-project").innerHTML = apiData
    })
    
};

getOneProject()