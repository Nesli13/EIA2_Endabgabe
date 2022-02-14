"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Tomato extends DönerTrainer_Endabgabe.Ingredient {
        constructor(_amount, _containerAmount, _position) {
            super(_amount, _containerAmount, _position);
        }
        draw() {
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "red";
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 165, this.position.y - 370, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 173, this.position.y - 380, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 175, this.position.y - 380, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 185, this.position.y - 370, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 188, this.position.y - 375, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 190, this.position.y - 370, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 175, this.position.y - 400, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 180, this.position.y - 400, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 193, this.position.y - 400, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 195, this.position.y - 400, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(this.position.x + 199, this.position.y - 390, 15, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.restore();
            DönerTrainer_Endabgabe.crc2.save();
        }
    }
    DönerTrainer_Endabgabe.Tomato = Tomato;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Tomato.js.map