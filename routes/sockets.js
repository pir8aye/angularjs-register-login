/**
 * # To send to the newly created connection only:
 *      socket.emit();
 * 
 * # To send to all the clients:
 *      io.sockets.emit();
 * 
 * # To send to all the other clients except the newly created connection:
 *      socket.broadcast.emit(); 
 */
module.exports = function (io, socket) {
    socket.on('disconnect', () => {
        
    });
}