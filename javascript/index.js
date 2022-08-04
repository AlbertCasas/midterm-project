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