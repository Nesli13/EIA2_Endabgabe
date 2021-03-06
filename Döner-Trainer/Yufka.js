"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Yufka extends DönerTrainer_Endabgabe.Ingredient {
        constructor(_amount, _containerAmount, _position) {
            super(_amount, _containerAmount, _position);
        }
        draw() {
            // meat
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#800000";
            DönerTrainer_Endabgabe.crc2.arc(-40, 21, 11, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            // meat
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#800000";
            DönerTrainer_Endabgabe.crc2.arc(30, 21, 11, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //yufka-bread
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#bfa290";
            DönerTrainer_Endabgabe.crc2.fillRect(0, 0, 70, 23);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.restore();
        }
    }
    DönerTrainer_Endabgabe.Yufka = Yufka;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Yufka.js.map