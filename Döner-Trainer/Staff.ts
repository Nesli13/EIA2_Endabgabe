namespace DönerTrainer_Endabgabe {
    export class Staff extends Person {

        constructor(_position?: Vector, _size?: Vector) {
            super(_position);
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);


        }

        public draw(): void {

            //happy Staff
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#Dda0dd";
            crc2.arc(85, -170, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(85, -220, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(73, -220, 4, 0, 2 * Math.PI);
            crc2.arc(93, -220, 4, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.arc(83, -210, 10, 0, Math.PI, false);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(63, -170, 7, 0, 2 * Math.PI);
            crc2.arc(105, -170, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#6495ed";
            crc2.arc(70, -135, 8, 0, 2 * Math.PI);
            crc2.arc(95, -135, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(70, -245);
            crc2.lineTo(70, -230);
            crc2.moveTo(75, -245);
            crc2.lineTo(75, -230);
            crc2.moveTo(80, -245);
            crc2.lineTo(80, -230);
            crc2.moveTo(85, -245);
            crc2.lineTo(85, -230);
            crc2.moveTo(90, -245);
            crc2.lineTo(90, -230);
            crc2.moveTo(95, -245);
            crc2.lineTo(95, -230);
            crc2.moveTo(100, -245);
            crc2.lineTo(100, -230);
            crc2.closePath();
            crc2.stroke();
            crc2.save();
            crc2.restore();

        }
        public drawSleepyStaff(): void {
            //sleepy Staff
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#Dda0dd";
            crc2.arc(85, -170, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(85, -220, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(73, -220, 2, 0, 1 * Math.PI);
            crc2.arc(93, -220, 2, 0, 1 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.moveTo(71, -210);
            crc2.lineTo(100, -210);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(63, -170, 7, 0, 2 * Math.PI);
            crc2.arc(105, -170, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#6495ed";
            crc2.arc(70, -135, 8, 0, 2 * Math.PI);
            crc2.arc(95, -135, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(70, -245);
            crc2.lineTo(70, -230);
            crc2.moveTo(75, -245);
            crc2.lineTo(75, -230);
            crc2.moveTo(80, -245);
            crc2.lineTo(80, -230);
            crc2.moveTo(85, -245);
            crc2.lineTo(85, -230);
            crc2.moveTo(90, -245);
            crc2.lineTo(90, -230);
            crc2.moveTo(95, -245);
            crc2.lineTo(95, -230);
            crc2.moveTo(100, -245);
            crc2.lineTo(100, -230);
            crc2.closePath();
            crc2.stroke();
            crc2.save();
            crc2.restore();

        }
        public drawMadStaff(): void {
            //mad Staff
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#Dda0dd";
            crc2.arc(85, -170, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(85, -220, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(73, -220, 4, 0, 2 * Math.PI);
            crc2.arc(93, -220, 4, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.arc(83, -200, 10, 0, Math.PI, true);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(63, -170, 7, 0, 2 * Math.PI);
            crc2.arc(105, -170, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#6495ed";
            crc2.arc(70, -135, 8, 0, 2 * Math.PI);
            crc2.arc(95, -135, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(70, -245);
            crc2.lineTo(70, -230);
            crc2.moveTo(75, -245);
            crc2.lineTo(75, -230);
            crc2.moveTo(80, -245);
            crc2.lineTo(80, -230);
            crc2.moveTo(85, -245);
            crc2.lineTo(85, -230);
            crc2.moveTo(90, -245);
            crc2.lineTo(90, -230);
            crc2.moveTo(95, -245);
            crc2.lineTo(95, -230);
            crc2.moveTo(100, -245);
            crc2.lineTo(100, -230);
            crc2.closePath();
            crc2.stroke();
            crc2.save();
            crc2.restore();

        }


        public mood(): void {
            console.log("mood");
        }
        public move(): void {
            console.log("mood");
        }
    }
}