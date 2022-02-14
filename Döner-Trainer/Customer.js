"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Customer extends DönerTrainer_Endabgabe.Person {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new DönerTrainer_Endabgabe.Vector(0, 0);
        }
        draw() {
            //happy Customer
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
            DönerTrainer_Endabgabe.crc2.arc(0, 120, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(0, 70, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(10, 70, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(-10, 70, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.arc(0, 80, 10, 0, Math.PI, false);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(-20, 120, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(20, 120, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
            DönerTrainer_Endabgabe.crc2.arc(-12, 150, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(12, 150, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(-15, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-15, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(-10, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-10, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(-5, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-5, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(0, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(0, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(5, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(5, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(10, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(10, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(15, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(15, 45);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.restore();
        }
        drawImpatientCustomer() {
            //impatient Customer
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
            DönerTrainer_Endabgabe.crc2.arc(0, 120, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(0, 70, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(10, 70, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(-10, 70, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(-10, 80);
            DönerTrainer_Endabgabe.crc2.lineTo(10, 80);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(-20, 120, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(20, 120, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
            DönerTrainer_Endabgabe.crc2.arc(-12, 150, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(12, 150, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(-15, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-15, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(-10, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-10, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(-5, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-5, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(0, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(0, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(5, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(5, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(10, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(10, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(15, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(15, 45);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.restore();
        }
        drawMadCustomer() {
            //mad Customer
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#b0E0E6";
            DönerTrainer_Endabgabe.crc2.arc(0, 120, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(0, 70, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(10, 70, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(-10, 70, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.arc(0, 90, 10, 0, Math.PI, true);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(-20, 120, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(20, 120, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#BC8F8F";
            DönerTrainer_Endabgabe.crc2.arc(-12, 150, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(12, 150, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(-15, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-15, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(-10, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-10, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(-5, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(-5, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(0, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(0, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(5, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(5, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(10, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(10, 45);
            DönerTrainer_Endabgabe.crc2.moveTo(15, 60);
            DönerTrainer_Endabgabe.crc2.lineTo(15, 45);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.restore();
        }
        move(_timeslice) {
            //console.log("move");
            /*let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
*/
        }
    }
    DönerTrainer_Endabgabe.Customer = Customer;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Customer.js.map