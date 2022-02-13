"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Progress {
        p;
        style;
        constructor(p) {
            this.p = p;
            this.update();
        }
        update() {
            this.bar.style.width = this.p + '%';
        }
        countup() {
            if (this.p < 100) {
                this.p += 10;
            }
            this.update();
        }
        countdown() {
            if (0 < this.p) {
                this.p -= 10;
            }
            this.update();
        }
    }
    DönerTrainer_Endabgabe.Progress = Progress;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Progress.js.map