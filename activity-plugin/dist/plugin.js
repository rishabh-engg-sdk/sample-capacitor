var capacitorActivity = (function (exports, core) {
    'use strict';

    exports.Operator = void 0;
    (function (Operator) {
        Operator[Operator["ADD"] = 0] = "ADD";
        Operator[Operator["SUBTRACT"] = 1] = "SUBTRACT";
        Operator[Operator["MULTIPLY"] = 2] = "MULTIPLY";
        Operator[Operator["DIVISION"] = 3] = "DIVISION";
    })(exports.Operator || (exports.Operator = {}));

    const Activity = core.registerPlugin('Activity', {});
    const Calculate = core.registerPlugin('Calculate', {});

    exports.Activity = Activity;
    exports.Calculate = Calculate;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
