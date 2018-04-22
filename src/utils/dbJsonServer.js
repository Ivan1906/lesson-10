const BASE_URL = 'http://localhost:3004/';

const API_JsonServer = () => ({
    get: (collection) => {
        return fetch(`${BASE_URL}${collection}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => data.map(obj => console.log(obj)))
    },

    delete: () => true
})

/*method: "GET",
body: JSON.stringify({ title: "Check out a cool json-server example!" }),
headers: {
    "Content-Type": "application/json" // <--- don't forget this!
}*/

export default API_JsonServer;