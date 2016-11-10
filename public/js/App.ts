namespace App {
        let app = angular.module ('App', ['ui.router']);

        app.config ([
            '$stateProvider',
            ($stateProvider: angular.ui.IStateProvider) => {
                $stateProvider
                    .state ('home', {
                        url: '/',
                        template:'Home page',
                        controller: App.HomeController,

                    })
                    .state ('about', {
                        url: '/about',
                        template: 'About page',
                        controller: App.AboutController,
                    })
                    .state ('contact', {
                        url: '/contact',
                        templateUrl: 'Contact page',
                        controller: App.ContactController,

                    })
                    .state ('calculator', {
                        url: '/calculator',
                        templateUrl: 'templates/calculator.html',
                        controller: App.CalculatorController,
                        controllerAs: 'calculatorController'
                    })
            }
        ]);

        }
