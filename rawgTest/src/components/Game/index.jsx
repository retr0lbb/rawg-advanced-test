export default (props) =>{

    const API_KEY="9fe9df9f628245ccbef2da5be661f072"
    const URL_ENDPOINT = "https://api.rawg.io/api/games"

    const queryParams = {
        key: API_KEY,
        page: '1,2',
        page_size:'-rating',
        platforms: '18,1,7'
    };

    const url = `${URL_ENDPOINT}?${new URLSearchParams(queryParams)}`

    fetch(url).then(response => response.json()).then((data => {
            const games = data.results
            console.log(games)
    }))


    return(
        <div>

        </div>
    );
}