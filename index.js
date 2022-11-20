const express = require('express');

const server = express();

server.use(express.json()); 
const teste = [];


server.get('/api',(req, res) => { return res.json({message: 'Hello World'})})


server.listen(3000);


server.get('/teste', (req, res) => {
    return res.json(teste);
})

server.post('/teste',(req,res)=>{
    const {name} = req.body
    teste.push(name);
    return res.json(teste)
}
)