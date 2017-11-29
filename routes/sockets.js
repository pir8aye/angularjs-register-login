module.exports = (socket) => {
    const io = this;
    socket.on('test', (data) => {
        console.log('here')
    });
};