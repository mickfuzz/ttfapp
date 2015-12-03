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

	starter.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);


starter.controller('MyController', function MyController($scope,$sce){
	$scope.menu = {
			'html': '<ion-list> \
				<ion-item href ="ch001_an-introduction-to-this-booklet"/> \
			    <ion-item href ="ch002_email-email-lists"/> \
			        <ion-item href ="ch003_anonymous-blogs-and-websites"/> \
			        <ion-item href ="ch004_microblogging-beyond-twitter"/> \
			        <ion-item href ="ch005_browsing-the-internet-safely"/> \
			        <ion-item href ="ch006_organising-networking-online"/> \
			        <ion-item href ="ch007_mobile-phone-security-and-android-apps"/> \
			        <ion-item href ="ch008_publishing-your-news"/> \
			        <ion-item href ="ch009_uploading-media-to-the-internet"/> \
			        <ion-item href ="ch010_green-computing"/> \
			        <ion-item href ="ch011_hiding-deleting-things-on-your-pc"/>" \
			     </ion-list> \
			        		"'

	}


});



