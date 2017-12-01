import Angular from 'angular';
import SocketFactory from './socket.factory';

const dependencies = [];

export default Angular
        .module('myApp.SocketService', dependencies)
        .factory('SocketFactory', SocketFactory)
        .name;