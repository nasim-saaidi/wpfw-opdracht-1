const sortButton = document.getElementById("sortButton");

const projects = [
    {
    "repo_link": "https://github.com/nasim-saaidi/escape-room",
    "title" : "Escape room",
    "img_alt": "Een screenshot van mijn escape room project",
    "img_src": "/wpfw-opdracht-1/img/escape-room-game.png",    
    "description": "Op het mbo heb ik samen met een paar klasgenoten een text puzzel game gemaakt"
},
{
    "repo_link": "https://github.com/nasim-saaidi/design-portfolio",
    "title" : "Portfolio",
    "img_alt" : "Een screenshot van mijn oude portfolio project",
    "img_src": "/wpfw-opdracht-1/img/portfolio.png",  
    "description": "Dit is een oudere portfolio die ik gemaakt had op het mbo"
},
{
    "repo_link": "https://github.com/nasim-saaidi/tic-tac-toe",
    "title" : "Boter kaas en eieren",
    "img_alt": "Een screenshot van mijn boter kaas en eieren project",
    "img_src": "/wpfw-opdracht-1/img/bke-game.png",  
    "description": "Dit is een boter kaas en eieren spel die ik gemaakt had voor een van mijn projecten op school"
},
{
    "repo_link": "https://github.com/nasim-saaidi/higher-or-lower",
    "title" : "Higher lower",
    "img_alt" : "Een screenshot van mijn hoger-lager project",
    "img_src": "/wpfw-opdracht-1/img/hoger-lager.png",
    "description": "Dit is een hoger lager spel die ik voor het mbo had gemaakt. Dit was mijn eerste project"
},
{
    "repo_link": "https://github.com/nasim-saaidi/rock-paper-scizzors-part-2",
    "title" : "Steen papier schaar",
    "img_alt": "Een screenshot van mijn steen papier schaar project",
    "img_src": "/wpfw-opdracht-1/img/rps.png",
    "description": "Dit is een steen papier schaar spel die ik in mijn eigen tijd heb gemaakt"
}

]

const inputSpace = document.getElementById("projecten");

function loadJSON(projects) {
    
projects.forEach((project, index) => {
    if(index === 0) {
        inputSpace.innerHTML = '';
    }
    if(index % 2 === 0) {
        const row = document.createElement("div");
        row.classList.add("row");
        inputSpace.appendChild(row)
    }

        const row = inputSpace.lastElementChild;

        const article = document.createElement("article");
        const link = document.createElement("a");
        const img = document.createElement("img");
        const title = document.createElement("h4");
        const desc = document.createElement("h3");
        link.href = project.repo_link;
        img.alt = project.img_alt;
        img.src = project.img_src;
        title.textContent = project.title
        desc.innerHTML = project.description
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(title);
        link.appendChild(desc)
        row.appendChild(article)
}
)
}

loadJSON(projects)

sortButton.addEventListener("click", () => {projects.sort((a, b) => a.title.localeCompare(b.title)), loadJSON(projects)})



