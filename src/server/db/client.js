const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/review-site';

const db = new Client({
    connectionString,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = db;
