(function () {
    "use strict";
    
    myApp.service("FlashService", FlashService);
    
    FlashService.$inject = ["$rootScope"];
    
    /**
     * Flash Service:
     * @param $rootScope
     * @returns object
     * @since 1.0
     */
    function FlashService($rootScope) {
        
        // 
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
        
        // Danger
        this.Danger = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "danger",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        
        // Info
        this.Info = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "info",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        
        // Success
        this.Success = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "success",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        
        // Warning
        this.Warning = function (message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "warning",
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
    }
})();