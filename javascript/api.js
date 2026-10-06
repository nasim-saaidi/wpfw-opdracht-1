const url = "https://weerlive.nl/api/weerlive_api_v2.php?key=ec087e38d3&locatie=Denhaag";
const api = document.querySelector(".head");

async function haalDataOp() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        api.innerHTML += `

            <p>het is ${data.liveweer[0].timestamp} uur, ${data.liveweer[0].temp} graden(voelt als ${data.liveweer[0].gtemp}) in ${data.liveweer[0].plaats}</p>
            
            
        `;
    } catch (error) {
        console.log(error);
    }
}

haalDataOp();
