/*
const { Pool } = require('pg');

class dbclient{
    constructor(connection){
        this.conn = new connection()
    }
}

const new_connection = new dbclient(Pool)

function GetDBClient(){
    return new_connection
};

export default {GetDBClient};
*/

const knexConfig = require('./knexfile.js');

const Knex = require('knex')(knexConfig);

const client = Knex;

module.exports = client;