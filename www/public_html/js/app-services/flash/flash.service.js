(function () {
    "use strict";
    
    /**
     * Flash Service:
     * @param $rootScope
     * @returns object
     * @since 1.0
     */
    function FlashService($rootScope) {
        
        // 
        (function () {
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
            $rootScope.$on("$locationChangeStart", function () {
                ClearFlashMessage();
            });
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
    
    FlashService.$inject = ["$rootScope"];
    
    myApp.service("FlashService", FlashService);
    
})();