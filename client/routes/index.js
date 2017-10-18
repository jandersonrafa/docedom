// routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

// export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
//     // $locationProvider.html5Mode(true);
//     $urlRouterProvider.otherwise('/home');

//     $stateProvider
//     .state('home', {
//       url: '/home',
//       template: '<home></home>',
//     //   template: require('./components/home/home.html'),
//     //   controller: 'HomeController',
//     //   controllerAs: 'home'
//     });
// }


routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        template: '<home></home>',
    })
}