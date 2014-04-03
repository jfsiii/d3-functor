(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        function d3_functor(v) {
            return typeof v === "function" ? v : function() {
                return v;
            };
        }
        d3.functor = d3_functor;
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();