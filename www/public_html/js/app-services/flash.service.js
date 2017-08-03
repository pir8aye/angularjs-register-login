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
        function clearFlashMessage() {
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
            clearFlashMessage();
        });
    })();

    // Danger
    this.danger = function (message, keepAfterLocationChange) {
        $rootScope.flash = {
            message: message,
            type: "danger",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };

    // Info
    this.info = function (message, keepAfterLocationChange) {
        $rootScope.flash = {
            message: message,
            type: "info",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };

    // Success
    this.success = function (message, keepAfterLocationChange) {
        $rootScope.flash = {
            message: message,
            type: "success",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };

    // Warning
    this.warning = function (message, keepAfterLocationChange) {
        $rootScope.flash = {
            message: message,
            type: "warning",
            keepAfterLocationChange: keepAfterLocationChange
        };
    };
}

FlashService.$inject = ["$rootScope"];

myApp.service("FlashService", FlashService);