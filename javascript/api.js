const url = "https://api.open-meteo.com/v1/forecast?latitude=52.0767&longitude=4.2986&current=temperature_2m&timezone=auto";
const api = document.querySelector(".head");

async function getAPIData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        api.innerHTML += `

            <p>het is ${data.current.time} uurdsfasdf, het is ${data.current.temperature_2m, data.current_units.temperature_2m} graden in den haag}</p>
            
            
        `;
    } catch (error) {
        console.log(error);
    }
}

getAPIData();
