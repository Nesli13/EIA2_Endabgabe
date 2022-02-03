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
            //happy Customer
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x + 100, this.position.y - 400);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
            DönerTrainer_Endabgabe.crc2.arc(85, 25, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(85, -30, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(73, -30, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(93, -30, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.arc(83, -17, 10, 0, Math.PI, false);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(63, 20, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(105, 20, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
            DönerTrainer_Endabgabe.crc2.arc(70, 60, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(95, 60, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(70, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(70, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(75, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(75, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(80, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(80, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(85, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(85, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(90, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(90, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(95, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(95, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(100, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -40);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.restore();
            DönerTrainer_Endabgabe.crc2.save();
        }
        drawImpatientCustomer(_position) {
            //impatient Customer
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
            DönerTrainer_Endabgabe.crc2.arc(85, 25, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(85, -30, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(73, -30, 3.5, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(93, -30, 3.5, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.moveTo(71, -15);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -16);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(63, 20, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(105, 20, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
            DönerTrainer_Endabgabe.crc2.arc(70, 60, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(95, 60, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(70, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(70, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(75, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(75, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(80, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(80, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(85, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(85, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(90, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(90, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(95, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(95, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(100, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -40);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.restore();
            DönerTrainer_Endabgabe.crc2.save();
        }
        drawMadCustomer(_position) {
            //mad Customer
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(_position.x - 650, _position.y - 400);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
            DönerTrainer_Endabgabe.crc2.arc(85, 25, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(85, -30, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(73, -30, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(93, -30, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.arc(83, -13, 10, 0, Math.PI, true);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(63, 20, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(105, 20, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
            DönerTrainer_Endabgabe.crc2.arc(70, 60, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(95, 60, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(70, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(70, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(75, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(75, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(80, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(80, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(85, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(85, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(90, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(90, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(95, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(95, -40);
            DönerTrainer_Endabgabe.crc2.moveTo(100, -55);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -40);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.restore();
            DönerTrainer_Endabgabe.crc2.save();
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