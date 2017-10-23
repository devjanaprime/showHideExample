var myApp = angular.module( 'myApp', [] );

myApp.controller( 'ShowHideController', function(){
    vm = this;
    console.log( 'ng' );

    vm.toggleTesty = function(){
        if( vm.activeList ){
            console.log( 'found a testy' );
            vm.activeList = '';
        }
        else{
            vm.activeList = {
                user_id: 3,
                title: 'Beaches',
                items: []
            }
        }
    }

});