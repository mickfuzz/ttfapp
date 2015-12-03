// from http://stackoverflow.com/questions/32208609/cordova-why-would-inappbrowser-plugin-be-required-to-open-links-in-system-brows

function openAllLinksWithBlankTargetInSystemBrowser() {
    if ( typeof cordova === "undefined" || !cordova.InAppBrowser ) {
        throw new Error("You are trying to run this code for a non-cordova project, " +
                "or did not install the cordova InAppBrowser plugin");
    }

    // Currently (for retrocompatibility reasons) the plugin automagically wrap window.open
    // We don't want the plugin to always be run: we want to call it explicitly when needed
    // See https://issues.apache.org/jira/browse/CB-9573
    delete window.open; // scary, but it just sets back to the default window.open behavior
    var windowOpen = window.open; // Yes it is not deleted !

    // Note it does not take a target!
    var systemOpen = function(url, options) {
        // Do not use window.open becaus the InAppBrowser open will not proxy window.open
        // in the future versions of the plugin (see doc) so it is safer to call InAppBrowser.open directly
        cordova.InAppBrowser.open(url,"_system",options);
    };


    // Handle direct calls like window.open("url","_blank")
    window.open = function(url,target,options) {
        if ( target == "_blank" ) systemOpen(url,options);
        else windowOpen(url,target,options);
    };

    // Handle html links like <a href="url" target="_blank">
    // See https://issues.apache.org/jira/browse/CB-6747
    $(document).on('click', 'a[target=_blank]', function(event) {
        event.preventDefault();
        systemOpen($(this).attr('href'));
    });
}


// Ionic Starter App




// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic','ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('MyController', function($scope, $sce) {
	  $scope.myTitle = 'Template';

	  $scope.html3 =
	        '<p style="color:blue">an html\n' +
	        '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
	        'snippet</p>';
	  $scope.html =
	        '<p style="color:blue">an html\n' +
	        '<a href="http:www.google.com">click here</em>\n' +
	        'snippet</p>';


	  $scope.html2 = $sce.trustAsHtml($scope.html);

	  $scope.sampleText = '<h2 id=\"myid\">My Title<\/h2>';
	});





