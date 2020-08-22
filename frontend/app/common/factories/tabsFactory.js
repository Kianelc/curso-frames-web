(function() {
    angular.module("primeiroApp").factory("tabs", [TabsFactory]);

    function TabsFactory() {
        function show(owner, {
            tabList = false,
            tabCreate = false,
            tabUpdate = false,
            tabDelete = false
        }) {
            //isso é igual a isso: obj.tabList
            owner.tabList = tabList
            owner.tabCreate = tabCreate
            owner.tabUpdate = tabUpdate
            owner.tabDelete = tabDelete
        }
        return { show }
    }
})()