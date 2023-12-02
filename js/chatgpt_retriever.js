function writeOpenAIResponse(message){
    return getOpenAIResposne(message);
}


var http = require("http");
var options = {
    host: "127.0.0.1/",
    port: 5000,
    path: "/v1/chat/completions",
}






const OpenAI = require("openai");
const openai = new OpenAI();

function getOpenAIResposne(messagecontent){
 
    var req = http.request(options, function(res){
        const completion = openai.chat.completions.create({
   
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "user",
                    content: messagecontent
                }]
          });

          res.on(completion, function(chunk){
            return chunk;
          })


    })


}

module.exports.writeOpenAIResponse= function(){
    return writeOpenAIResponse();
}
