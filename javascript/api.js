const url = "https://weerlive.nl/api/weerlive_api_v2.php?key=ec087e38d3&locatie=Denhaag";
const nav = document.getElementById("footer");

async function getAPIData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const weather = document.createElement("div")

        weather.innerHTML += `

            <p>Het is ${data.liveweer[0].time} uur, ${data.liveweer[0].temp} graden(voelt als ${data.liveweer[0].gtemp}) in ${data.liveweer[0].plaats}</p>
            
            
        `;
        weather.classList.add("api")
        nav.appendChild(weather)
    } catch (error) {
        console.log(error);
    }
}

getAPIData();
