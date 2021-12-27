import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port: 8080});
const connections = [];
let d = '';

wss.on('connection', ws => {
    connections.push(ws);
    ws.on('message', onMessage);
    ws.send(d, {binary: false});
});

const onMessage = data => {
    d += data;
    connections.forEach(ws => ws.send(d, {binary: false}));
};
