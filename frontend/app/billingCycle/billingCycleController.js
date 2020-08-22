(function() {
    angular.module("primeiroApp").controller("BillingCycleCtrl", [
        "$http",
        "msgs",
        "tabs",
        BillingCycleController,
    ]);
    function BillingCycleController($http, msgs, tabs) {
        const vm = this;
        const url = 'http://localhost:3003/api/billingCycles';

        vm.refresh = function() {
            $http.get(url).then(response => {
                vm.billingCycle = {};
                vm.billingCycles = response;
                tabs.show(vm, {tabList: true, tabCreate: true});
            });
        }

        vm.create = function() {

            $http.post(url, vm.billingCycle).then((response) => {
                vm.refresh();
                msgs.addSuccess("Operação realizada com sucesso!");
            }).catch((data) => {
                msgs.addError(data.data.errors);
            });
        }

        vm.refresh();
    }
})()