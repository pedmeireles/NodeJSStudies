const fs = require('fs');
const os = require('os');


const renderUsers = (req, res) => {
    return fs.readFile("users.txt", 'utf8', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body>');
        res.write('<h1>Hello there! The list of users are: </h1>');
        res.write('<ul>');
        const userList = data.split(os.EOL);
        userList.forEach(user =>{
            res.write(`<li>${user}</li>`);
        })
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    })
}

const createUser = (req, res) =>{
    const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });
      return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const username = parsedBody.split('=')[1];
        fs.readFile("users.txt", 'utf8', (err, data) => {
            const userList = data.split(os.EOL);
            userList.push(username);
            fs.writeFile("users.txt", userList.join(os.EOL), err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                return res.end();
            })
    
        })
      });
}

module.exports = {
    renderUsers,
    createUser,
};
