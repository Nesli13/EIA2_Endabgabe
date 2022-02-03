"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Lahmacun extends DönerTrainer_Endabgabe.Ingredient {
        constructor(_position, _amount, _containerAmount, _type, _size) {
            super(_position, _amount, _containerAmount, _type, _size);
        }
        draw() {
            //flat bread
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#BB7733";
            DönerTrainer_Endabgabe.crc2.arc(85, -30, 40, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //minced meat
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#800000";
            DönerTrainer_Endabgabe.crc2.arc(85, -30, 30, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.restore();
        }
    }
    DönerTrainer_Endabgabe.Lahmacun = Lahmacun;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Lahmacun.js.map