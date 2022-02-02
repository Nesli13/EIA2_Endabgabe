"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Customer extends DönerTrainer_Endabgabe.Person {
        constructor(_position, _size) {
            super(_position);
            super(_size);
            if (_position)
                this.position = _position;
            else
                this.position = new DönerTrainer_Endabgabe.Vector(0, 0);
        }
        draw() {
            //console.log("Create Squirrel");
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(-170 + this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#8B4513";
            DönerTrainer_Endabgabe.crc2.arc(130, 19, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(135, 18, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(140, 17, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(145, 16, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(150, 14, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(155, 11, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(160, 9, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(165, 6, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(168, 4, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(170, 3, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(173, 2, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(175, 0, 12, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(100, 50, 13, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(99, 17, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(59, 21, 12, 15.7, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(85, -30, 24, -5, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(85, -50, 14, -5, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            //ears
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#CD853F";
            DönerTrainer_Endabgabe.crc2.arc(85, -50, 9, -5, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            //eyes+mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(76, -29, 4, -5, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(73, -12, 1, -5, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(75, -15, 1, -5, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            DönerTrainer_Endabgabe.crc2.restore();
        }
        mood() {
            console.log("mood");
        }
        move() {
            console.log("mood");
        }
    }
    DönerTrainer_Endabgabe.Customer = Customer;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Customer.js.map