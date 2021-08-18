const pgp =require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'Ana1312',
    host:'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports =db;