"use strict";
var DönerTrainer_Endabgabe;
(function (DönerTrainer_Endabgabe) {
    class Staff extends DönerTrainer_Endabgabe.Person {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new DönerTrainer_Endabgabe.Vector(0, 0);
        }
        draw() {
            //happy Staff
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#Dda0dd";
            DönerTrainer_Endabgabe.crc2.arc(85, -170, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(85, -220, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(73, -220, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(93, -220, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.arc(83, -210, 10, 0, Math.PI, false);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(63, -170, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(105, -170, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#6495ed";
            DönerTrainer_Endabgabe.crc2.arc(70, -135, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(95, -135, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(70, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(70, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(75, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(75, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(80, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(80, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(85, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(85, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(90, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(90, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(95, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(95, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(100, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -230);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.restore();
        }
        drawSleepyStaff() {
            //sleepy Staff
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#Dda0dd";
            DönerTrainer_Endabgabe.crc2.arc(85, -170, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(85, -220, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(73, -220, 2, 0, 1 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(93, -220, 2, 0, 1 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(71, -210);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -210);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(63, -170, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(105, -170, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#6495ed";
            DönerTrainer_Endabgabe.crc2.arc(70, -135, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(95, -135, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(70, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(70, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(75, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(75, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(80, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(80, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(85, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(85, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(90, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(90, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(95, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(95, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(100, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -230);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.restore();
        }
        drawMadStaff() {
            //mad Staff
            //body
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.translate(this.position.x, this.position.y);
            DönerTrainer_Endabgabe.crc2.fillStyle = "#Dda0dd";
            DönerTrainer_Endabgabe.crc2.arc(85, -170, 35, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //head
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(85, -220, 25, -6, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //eye
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "black";
            DönerTrainer_Endabgabe.crc2.arc(73, -220, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(93, -220, 4, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //mouth
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.arc(83, -200, 10, 0, Math.PI, true);
            DönerTrainer_Endabgabe.crc2.lineWidth = 2;
            DönerTrainer_Endabgabe.crc2.strokeStyle = "black";
            DönerTrainer_Endabgabe.crc2.stroke();
            //arm
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#FFEFd5";
            DönerTrainer_Endabgabe.crc2.arc(63, -170, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(105, -170, 7, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //feet
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.fillStyle = "#6495ed";
            DönerTrainer_Endabgabe.crc2.arc(70, -135, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.arc(95, -135, 8, 0, 2 * Math.PI);
            DönerTrainer_Endabgabe.crc2.fill();
            //hair
            DönerTrainer_Endabgabe.crc2.beginPath();
            DönerTrainer_Endabgabe.crc2.moveTo(70, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(70, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(75, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(75, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(80, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(80, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(85, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(85, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(90, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(90, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(95, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(95, -230);
            DönerTrainer_Endabgabe.crc2.moveTo(100, -245);
            DönerTrainer_Endabgabe.crc2.lineTo(100, -230);
            DönerTrainer_Endabgabe.crc2.closePath();
            DönerTrainer_Endabgabe.crc2.stroke();
            DönerTrainer_Endabgabe.crc2.save();
            DönerTrainer_Endabgabe.crc2.restore();
        }
        move() {
            console.log("mood");
        }
    }
    DönerTrainer_Endabgabe.Staff = Staff;
})(DönerTrainer_Endabgabe || (DönerTrainer_Endabgabe = {}));
//# sourceMappingURL=Staff.js.map