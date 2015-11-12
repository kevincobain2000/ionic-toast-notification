angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $timeout, $ionicPopup) {

  $scope.toasts = [
                        {label:'Simple' , params: { hidePrevious:false, autoHide:3000}}
                      , {label:'1-By-1 (hide manually)' , params: { hidePrevious:false, autoHide:0}}
                      , {label:'1-By-1' , params: { hidePrevious:false, autoHide:3000}}
                      , {label:'Simple Without AutoHide' , params: { hidePrevious:true, autoHide:0}}
                  ]
   
  $scope.show = show;

  function show(toast){
    // important to init F7 false
    var myApp = new Framework7({init: false,});
    if (toast.params.hidePrevious) {
      myApp.closeNotification(".notification-item")
    };
    myApp.addNotification({
        title: toast.label,
        subtitle: "Subtitle",
        message: angular.toJson(toast.params, true),
        media: '<img width="44" height="44" style="border-radius:100%;object-fit:cover" src="http://lorempixel.com/g/400/400/">',
        onClick: function () {},
        onClose: function(){
          console.log("Closed - ", "Notification was closed")
        }
    });

    if (toast.params.autoHide) {
      $timeout(function(){myApp.closeNotification(".notification-item")}, toast.params.autoHide)
    };
  }

});