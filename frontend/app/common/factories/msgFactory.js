(function() {
    angular.module("primeiroApp").factory("msgs", [
        "toastr",
        MsgsFactory
    ]);

    function MsgsFactory(toastr) {
        function addMsg(msgs, title, methods) {
            if(msgs instanceof Array) {
                msgs.forEach(msg => toastr[methods](msg, title));
            } else {
                toastr[methods](msgs, title);
            }
        }
        function addSuccess(msgs) {
            addMsg(msgs, "Sucesso", "success");
        }
        function addError(msgs) {
            addMsg(msgs, "Erro", "error");
        }
        return { addSuccess, addError };
    }
})()