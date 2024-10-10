const WebSocket= require('ws');
const {marked}= require('marked');

const wss= new WebSocket.Server({port:8080});
wss.on('connection', (ws)=>{
    console.log("Client connected");
   
   ws.on('message',async (message)=>{
    
    const text = await new Response(message).text()
    const htmlContent = marked(text);
   ws.send(htmlContent);
   });

   ws.on('close',()=>{console.log('Client disconnected');});

    ws.on('error',(error)=>{
        
        console.error(`WebSocket Error :${error}`);
    })
   
    
});


console.log("WebSocket Server running on ws://localhost:8080");

