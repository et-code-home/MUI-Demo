// const db = require('./client')
const { countries } = require('../travel-data')

const getCountry = async(id) => {
    try {
        return countries[id];
    } catch (err) {
        throw err;
    }
}

const getAllCountries = async() => {
    try {
        return countries.slice(0, 50);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getCountry,
    getAllCountries,
};