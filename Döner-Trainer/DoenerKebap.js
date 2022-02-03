"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class DoenerKebap extends DönerTrainer_Endabgabe.Ingredient {
        constructor(_position, _amount, _containerAmount) {
            super(_position, _amount, _containerAmount);
        }
        draw() {
            //meat
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "brown";
            DönerTrainer_Endabgabe.crc2.arc(85, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(75, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(65, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(55, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(95, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(105, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(110, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(115, -35, 10, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //flat bread
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "hsl(34,44%,72%)";
            DönerTrainer_Endabgabe.crc2.arc(85, -30, 40, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //corn
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(50, -25, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(85, -25, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(115, -25, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(55, -15, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(70, -15, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(95, -15, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(110, -15, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(63, -5, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(75, -5, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(88, -5, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.arc(103, -5, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(85, 2, 2, 0, Math.PI);
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.restore();
        }
    }
    DönerTrainer_Endabgabe.DoenerKebap = DoenerKebap;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=DoenerKebap.js.map