const BASE_URL = 'http://localhost:3004/';

const getURL = (collection) => `${BASE_URL}${collection}`;

const toJSON = response => response.json();

const toArray = data => data.reduce((resultArray, elemCollection) => {
    return [ ...resultArray, { ...elemCollection }] 
}, []);

const API_JsonServer = () => ({
    get: async (collection) => {
        let data = await fetch(getURL(collection), {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(toJSON).then(toArray);
        console.log(data);

        return data;
    },

    delete: () => true
})

/*method: "GET",
body: JSON.stringify({ title: "Check out a cool json-server example!" }),
headers: {
    "Content-Type": "application/json" // <--- don't forget this!
}*/

export default API_JsonServer;