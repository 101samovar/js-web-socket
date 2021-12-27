const socket = new WebSocket('ws://localhost:8080');
const svg = document.getElementById('svg');
const path = document.getElementById('path');
let e0;
 
socket.addEventListener('message', e => {
   path.setAttributeNS(null, 'd', `${e.data}`);
});
 
svg.addEventListener('mousedown', e => e0 = e);
 
svg.addEventListener('mouseup', e => {
   socket.send(`M ${e0.offsetX} ${e0.offsetY} L ${e.offsetX} ${e.offsetY}`);
});
