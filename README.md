### DEMO (codepen)

<iframe src="//giphy.com/embed/U90cTy9NRLjUI" width="250" height="411" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>

http://codepen.io/kevincobain2000/pen/dYQBLK

## How TO

### Add in your index.html

```
    <!-- THE ADDITION -->
    <link rel="stylesheet" type="text/css" href="https://rawgit.com/nolimits4web/Framework7/master/dist/css/framework7.ios.css">
    <script src="https://rawgit.com/nolimits4web/Framework7/master/dist/js/framework7.js"></script>
```

#### HTML

```
  <ion-list>
    <ion-item class="item item-icon-right" ng-repeat="toast in toasts" ng-click="show(toast.params)">
      <h2>{{toast.label}}</h2>
      <p>{{toast.params}}</p>
      <i class="icon ion-chevron-right icon-font-sm"></i>
    </ion-item>
  </ion-list>
```

#### In your controller

```
.controller('AppCtrl', function($scope, $timeout, $ionicPopup) {

  $scope.toasts = [
                        {label:'Simple' , params: { hidePrevious:false, autoHide:3000}}
                      , {label:'1-By-1' , params: { hidePrevious:false, autoHide:0}}
                      , {label:'1-By-1' , params: { hidePrevious:false, autoHide:3000}}
                      , {label:'Simple' , params: { hidePrevious:true, autoHide:0}}
                  ]
   
  $scope.show = show;

  function show(params){
    // important to init F7 false
    var myApp = new Framework7({init: false,});
    if (params.hidePrevious) {
      myApp.closeNotification(".notification-item")
    };
    myApp.addNotification({
        title: "Title",
        subtitle: "Subtitle",
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        media: '<img width="44" height="44" style="border-radius:100%;object-fit:cover" src="http://lorempixel.com/g/400/400/">',
        onClick: function () {},
        onClose: function(){
          console.log('closed');
        }
    });

    if (params.autoHide) {
      $timeout(function(){myApp.closeNotification(".notification-item")}, params.autoHide)
    };
    
  }

});
```


#### Files & Docs

https://github.com/nolimits4web/framework7/