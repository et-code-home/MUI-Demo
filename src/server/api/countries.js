const express = require('express')
const countriesRouter = express.Router();

const {
    getCountry,
    getAllCountries
} = require('../db');

countriesRouter.get('/', async( req, res, next) => {
    try {
        const countries = await getAllCountries();
        res.send({
            countries
        });
    } catch ({name, message}) {
        next({name, message})
    }
});

countriesRouter.get('/:id', async( req, res, next) => {
    try {
        const country = await getCountry(id);

        res.send({
            country
        });
    } catch ({name, message}) {
        next({name, message})
    }
});

module.exports = countriesRouter;