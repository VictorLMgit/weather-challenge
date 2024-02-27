const dotenv = require('dotenv/config.js');
const app = require('./src/app.js');
const port = 3030;

const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor iniciado em http://${host}:${port}`);
});