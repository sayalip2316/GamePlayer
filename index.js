const express=require("express")
const app=express()
const cors=require("cors")
const fetch = require('node-fetch');

app.use(cors)
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/api/players', (req, res) => {
    const apiUrl = 'https://www.balldontlie.io/api/v1/players';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ error: 'Error fetching players data' }));
  });

  app.get('/api/teams/:teamId', (req, res) => {
    const { teamId } = req.params;
    const apiUrl = `https://www.balldontlie.io/api/v1/teams/${teamId}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ error: 'Error fetching team details' }));
  });
  
app.listen(4500,()=>{
    console.log("Server is listening on port 4500")
})