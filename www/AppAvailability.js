var appAvailability = {
    
    check: function(urlScheme, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "checkAvailability",
            [urlScheme]
        );
    },
    
    checkBool: function(urlScheme, callback) {
        cordova.exec(
            function(success) { callback(success); },
            function(error) { callback(error); },
            "AppAvailability",
            "checkAvailability",
            [urlScheme]
        );
    },

    openURL: function(url, callback) {
	var success = function() {
	    callback();
	};
	var failure = function(error) {
	    callback(error);
	};
	cordova.exec(success, 
		     failure, 
		     "AppAvailability", 
		     'openURL', 
		     [url]
		    );
    }
    
};

module.exports = appAvailability;
