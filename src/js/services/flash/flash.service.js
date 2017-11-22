
class FlashService {
    constructor($rootScope) {
        this._rootScope = $rootScope;
        this._rootScope.$on('$locationChangeStart', () => {
            const flash = this._rootScope.flash;
            if (flash) {
                if (!flash.keepAfterLocationChange) {
                    delete this._rootScope.flash;
                } else {
                    flash.keepAfterLocationChange = false;
                }
            }
        });
    }
    danger(message, keepAfterLocationChange) {
        this._rootScope.flash = {
            message: message,
            type: 'danger',
            keepAfterLocationChange: keepAfterLocationChange
        };
    }
    info(message, keepAfterLocationChange) {
        this._rootScope.flash = {
            message: message,
            type: 'info',
            keepAfterLocationChange: keepAfterLocationChange
        };
    }
    success(message, keepAfterLocationChange) {
        this._rootScope.flash = {
            message: message,
            type: 'success',
            keepAfterLocationChange: keepAfterLocationChange
        };
    }
    warning(message, keepAfterLocationChange) {
        this._rootScope.flash = {
            message: message,
            type: 'warning',
            keepAfterLocationChange: keepAfterLocationChange
        };
    }
}

FlashService.$inject = ['$rootScope'];

export default FlashService;