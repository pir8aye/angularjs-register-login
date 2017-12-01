import Angular from 'angular';
import FlashService from './flash.service';

const dependencies = [];

export default Angular
        .module('myApp.FlashService', dependencies)
        .service('FlashService', FlashService)
        .name;