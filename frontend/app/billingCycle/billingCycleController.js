(function() {
    angular.module("primeiroApp").controller("BillingCycleCtrl", [
        "$http",
        BillingCycleController
    ])
    function BillingCycleController($http) {
        const vm = this;

        vm.create = function() {
            const url = 'http://localhost:3003/api/billingCycles';

            $http.post(url, vm.billingCycle).then((response) => {
                vm.billingCycle = {};
                console.log("Sucesso!");
            })
        }
    }
})()