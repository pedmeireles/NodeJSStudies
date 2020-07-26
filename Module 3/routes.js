const fs = require('fs');

const user = require('./user');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  switch(url){
    case "/create-user":
      if(method === "POST"){
        return user.createUser(req, res);
      } else{
        return res.end();
      }
      break; 
    case "/users":
      return user.renderUsers(req, res);
      break;
    case "/":
    default:
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write(
        '<body><form action="/create-user" method="POST"><input type="text" name="username" placeholder="Please, enter username"><button type="submit">Send</button></form></body>'
      );
      res.write('</html>');
      return res.end();
  }
  return res.end();
};


exports.handler = requestHandler;