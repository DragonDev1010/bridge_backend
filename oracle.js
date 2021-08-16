var axios = require("axios").default;

axios
    .post(
        "https://priceoracle-api.herokuapp.com/api/oracle/updatePrice",
        {},
        {
            headers: {
                Authorization:
                "Basic API Key",
            },
        }
    )
    .then((res) => {
        console.log(res);
    });

async function getUser() {
    try {
        const response = await axios.post('https://priceoracle-api.herokuapp.com/api/oracle/updatePrice');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}    
