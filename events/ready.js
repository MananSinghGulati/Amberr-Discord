const client = require('../index');
const config = require('../config');

const prefix = config.prefix;

client.on('ready', async() => {
client.user.setStatus('idle')


   console.log(`${client.user.username} ✅`)
     
// 	 const express = require('express');
// const server = express();

// server.all('/', (req, res)=>{
//     res.send('HeistBot is functioning and running 24/7 now!')
// })

//  const port = process.env.port || 9000


// server.listen(port, () => console.log(`Your app is listining at http://localhost${port}`));




}) 