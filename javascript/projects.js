const sortButton = document.getElementById("sortButton");

const projects = [
    {
    "repo_link": "https://github.com/nasim-saaidi/escape-room",
    "img_alt": "een screenshot van mijn escape room project",
    "img_src": "/img/escape-room-game.png",
    "description": "op het mbo heb ik samen met een paar klasgenoten een text puzzel game gemaakt"
},
{
    "repo_link": "https://github.com/nasim-saaidi/design-portfolio",
    "img_alt" : "een screenshot van mijn oude portfolio project",
    "img_src": "/img/portfolio.png",
    "description": "dit is een oudere portfolio die ik gemaakt had op het mbo"
},
{
    "repo_link": "https://github.com/nasim-saaidi/tic-tac-toe",
    "img_alt": "een screenshot van mijn boter kaas en eieren project",
    "img_src": "/img/bke-game.png",
    "description": "dit is een boter kaas en eieren spel die ik gemaakt had voor een van mijn projecten op school"
},
{
    "repo_link": "https://github.com/nasim-saaidi/higher-or-lower",
    "img_alt" : "een screenshot van mijn hoger-lager project",
    "img_src": "/img/hoger-lager.png",
    "description": "dit is een hoger lager spel die ik voor het mbo had gemaakt. Dit was mijn eerste project"
},
{
    "repo_link": "https://github.com/nasim-saaidi/rock-paper-scizzors-part-2",
    "img_alt": "een screenshot van mijn steen papier schaar project",
    "img_src": "/img/rps.png",
    "description": "dit is een steen papier schaar spel die ik in mijn eigen tijd heb gemaakt"
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
        const img = document.createElement("img")
        const desc = document.createElement("h3");
        link.href = project.repo_link;
        img.alt = project.img_alt;
        img.src = project.img_src;
        desc.innerHTML = project.description
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(desc)
        row.appendChild(article)
}
)
}

loadJSON(projects)

sortButton.addEventListener("click", () => {projects.sort((a, b) => a.description.localeCompare(b.description)), loadJSON(projects)})



