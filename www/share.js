/**
 *  share.js
 *  Cordova Share Plugin for Android
 *
 *  Created by Ronald Klip ((github.com/RonaldPK)) on 02-09-2013.
 *  Copyright 2013 Ronald Klip. All rights reserved.
 *  LGPL v3 licensed
 */

var Share = function () {

};

Share.prototype = {
    /**
     * Open the Android share dialog.
     */
	show: function (content, success, fail) {
        return cordova.exec( function(args) { success(args); }, function(args) { fail(args); }, 'Share', '', [content]);
	}
};

var share = new Share();

module.exports = share;
