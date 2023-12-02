//Load HTTP module
const path = require('node:path');
const hostname = "127.0.0.1";
const port = 3001;
var oai = require("./js/chatgpt_retriever");
var express = require("express")
const app = express();
const bodyParser = require('body-parser')


app.use('/', express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.hmtl'));
});


app.post('/send', (req, res)=>{
    let message = req.body.usertext;
    let aioutput = oai.writeOpenAIResponse(message);
    res.send(aioutput);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  

//Create HTTP server and listen on port 3000 for requests


//listen for request on port 3000, and as a callback function have the port listened on logged
