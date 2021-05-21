const express = require('express');
const PORT = 8081;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world\n'); 
    import { TalkClient, LoginError } from 'node-kakao';
    let client = new TalkClient('clientName', 'random base64 device id');
    client.login('email', 'passwd')
        .then(() => console.log('Login succeed'))
        .catch((err: LoginError) => {
            console.log(`Login failed. status: ${err.status}, message: ${err.message}`);
        });
    console.log(`Running`);
});
app.listen(PORT, HOST);
