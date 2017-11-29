const express = require('express');
const path = require('path');

//
const app = express();

// 
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');
    const webpackMiddleware = require('webpack-dev-middleware');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}

// 
app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// 
const server = require('http').createServer(app);
server.listen(process.env.PORT || 3000, () => console.log('Express server listening on port %d', server.address().port));

// 
const users = {};
const io = require('socket.io')(server);
io.sockets.on('connection', socket => {
    socket.on('disconnect', () => {
        
    });
});
