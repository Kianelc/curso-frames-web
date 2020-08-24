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
                vm.billingCycle = {credits: [{}], debts:[{}]};
                vm.billingCycles = response;
                vm.calculateValue();
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

        vm.showTabUpdate = function(billingCycle) {
            vm.billingCycle = billingCycle;
            vm.calculateValue();
            tabs.show(vm, {tabUpdate: true});
        }

        vm.showTabDelete = function(billingCycle) {
            vm.billingCycle = billingCycle;
            vm.calculateValue();
            tabs.show(vm, {tabDelete: true});
        }

        vm.update = function() {
            const updateUrl = `${url}/${vm.billingCycle._id}`;
            $http.put(updateUrl, vm.billingCycle).then(() => {
                vm.refresh();
                msgs.addSuccess("Operação realizada com sucesso!");
            }).catch((data) => {
                msgs.addError(data.data.errors);
            });
        }

        vm.delete = function() {
            const deleteUrl = `${url}/${vm.billingCycle._id}`;
            $http.delete(deleteUrl, vm.billingCycle).then(() => {
                vm.refresh();
                msgs.addSuccess("Operação realizada com sucesso!");
            }).catch((data) => {
                msgs.addError(data.data.errors);
            });
        }

        vm.addCredit = function(index) {
            vm.billingCycle.credits.splice(index + 1, 0, {});
        }

        vm.cloneCredit = function(index, {name, value}) {
            vm.billingCycle.credits.splice(index + 1, 0, {name, value});
            vm.calculateValue();
        }

        vm.deleteCredit = function(index) {
            if(vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(index, 1);
                vm.calculateValue();
            }
        }

        vm.addDebt = function(index) {
            vm.billingCycle.debts.splice(index + 1, 0, {});
        }

        vm.cloneDebt = function(index, {name, value, status}) {
            vm.billingCycle.debts.splice(index + 1, 0, {name, value, status});
            vm.calculateValue();
        }

        vm.deleteDebt = function(index) {
            if(vm.billingCycle.debts.length > 1) {
                vm.billingCycle.debts.splice(index, 1);
                vm.calculateValue();
            }
        }

        vm.calculateValue = function() {
            vm.credit = 0;
            vm.debt = 0;

            if(vm.billingCycle) {
                vm.billingCycle.credits.forEach(({value}) => {
                    vm.credit += !value || isNaN(value) ? 0 : parseFloat(value);
                });

                vm.billingCycle.debts.forEach(({value}) => {
                    vm.debt += !value || isNaN(value) ? 0 : parseFloat(value);
                });
            }

            vm.total = vm.credit - vm.debt;
        }

        vm.refresh();
    }
})()