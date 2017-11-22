function FlashService($rootScope) {

        function clearFlashMessage () {
            const flash = $rootScope.flash;
            if (flash) {
                if (!flash.keepAfterLocationChange) {
                    delete $rootScope.flash;
                } else {
                    flash.keepAfterLocationChange = false;
                }
            }
        } 

    (() => {
        $rootScope.$on("$locationChangeStart", () => {
            clearFlashMessage();
        });
    })();

    this.danger = (message, keepAfterLocationChange) => {
        $rootScope.flash = {
            message: message,
            type: "danger",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };

    this.info = (message, keepAfterLocationChange) => {
        $rootScope.flash = {
            message: message,
            type: "info",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };

    this.success = (message, keepAfterLocationChange) => {
        $rootScope.flash = {
            message: message,
            type: "success",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };

    this.warning = (message, keepAfterLocationChange) => {
        $rootScope.flash = {
            message: message,
            type: "warning",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };
}

FlashService.$inject = ['$rootScope'];

export default FlashService;