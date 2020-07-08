export const Getcountry = async (countryname) => {
    return fetch('https://restcountries.eu/rest/v2/name/' + countryname, {
        method: 'GET'

    })
        .then((response) => response.json())

        .then((responseJson) => {

            console.log(responseJson);
            return responseJson;
        })

        .catch((error) => {

            console.error(error);
        });
}

export const getWeatherinfo = (name) => {
    return fetch('http://api.weatherstack.com/current?access_key=ab88e8aab7be14160ed6cf36280a700d&query=' + name, {
        method: 'GET'

    })
        .then((response) => response.json())

        .then((responseJson) => {

            console.log(responseJson);
            return responseJson;
        })

        .catch((error) => {

            console.error(error);
        });
}