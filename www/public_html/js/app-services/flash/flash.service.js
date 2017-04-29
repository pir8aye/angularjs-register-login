(function () {
    "use strict";
    
    myApp.service("FlashService", FlashService);
    
    FlashService.$inject = ["$rootScope"];
    
    function FlashService($rootScope) {
        (function () {
            $rootScope.$on("$locationChangeStart", function () {
                ClearFlashMessage();
            });
            function ClearFlashMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        })();
        // 
        this.Danger = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "danger",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        // 
        this.Info = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "info",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        // 
        this.Success = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "success",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        // 
        this.Warning = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "warning",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
    }
})();