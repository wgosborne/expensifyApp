const path = require('path'); //path is built in
const express = require('express'); //require is the node way to import something
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; //PORT is an environment variable from heroku

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); //matches all unmatched routes and tells them where to go

app.listen(port, () => {
    console.log('server is up!')
});

// to start it run yarn run build:prod then run node server/server.js