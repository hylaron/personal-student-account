const mysql = require('mysql2');
const { Client } = require('ssh2');

const DB_PORT = process.env.DB_PORT 
const DB_USER = process.env.DB_USER 
const DB_PASSWORD = process.env.DB_PASSWORD 
const TC_HOST = process.env.TC_HOST 
const TC_PORT = process.env.TC_PORT 
const TC_USERNAME = process.env.TC_USERNAME 
const TC_PASSWORD = process.env.TC_PASSWORD 
const FC_HOST = process.env.FC_HOST 
const FC_PORT = process.env.FC_PORT 

const mbs_DB_DATEBASE = process.env.mbs_DB_DATEBASE 

const sshClient = new Client();
const dbServer = {
    host: 'localhost',
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: mbs_DB_DATEBASE,
    connectTimeout: 300000, // 5 минут (300000 миллисекунд)
};
const tunnelConfig = {
    host: TC_HOST,
    port: TC_PORT,
    username: TC_USERNAME,
    password: TC_PASSWORD
}
const forwardConfig = {
    srcHost: FC_HOST,
    srcPort: FC_PORT,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};
const db = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
            forwardConfig.srcHost,
            forwardConfig.srcPort,
            forwardConfig.dstHost,
            forwardConfig.dstPort,
            (err, stream) => {
                if (err) reject(err);
                const updatedDbServer = {
                    ...dbServer,
                    stream
                };
                const connection =  mysql.createConnection(updatedDbServer);
                connection.connect((error) => {
                    if (error) {
                        console.log('error---', error)
                        reject(error);
                    }
                    console.log('Connection successful')
                    resolve(connection);
                });
            });
    }).connect(tunnelConfig);
});
module.exports = db;