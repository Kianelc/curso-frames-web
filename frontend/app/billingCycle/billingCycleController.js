(function() {
    angular.module("primeiroApp").controller("BillingCycleCtrl", [
        "$http",
        "msgs",
        BillingCycleController,
    ]);
    function BillingCycleController($http, msgs) {
        const vm = this;

        vm.create = function() {
            const url = 'http://localhost:3003/api/billingCycles';

            $http.post(url, vm.billingCycle).then((response) => {
                vm.billingCycle = {};
                msgs.addSuccess("Operação realizada com sucesso!");
            }).catch((data) => {
                msgs.addError(data.data.errors);
            });
        }
    }
})()