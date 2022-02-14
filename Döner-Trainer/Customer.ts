namespace DönerTrainer_Endabgabe {
    export class Customer extends Person {

        constructor(_position: Vector, _velocity?: Vector) {
            super(_position, _velocity);
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);


        }

        public draw(): void {

            //happy Customer
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#b0E0E6";
            crc2.arc(0, 120, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(0, 70, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(10, 70, 4, 0, 2 * Math.PI);
            crc2.arc(-10, 70, 4, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.arc(0, 80, 10, 0, Math.PI, false);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(-20, 120, 7, 0, 2 * Math.PI);
            crc2.arc(20, 120, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#BC8F8F";
            crc2.arc(-12, 150, 8, 0, 2 * Math.PI);
            crc2.arc(12, 150, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(-15, 60);
            crc2.lineTo(-15, 45);
            crc2.moveTo(-10, 60);
            crc2.lineTo(-10, 45);
            crc2.moveTo(-5, 60);
            crc2.lineTo(-5, 45);
            crc2.moveTo(0, 60);
            crc2.lineTo(0, 45);
            crc2.moveTo(5, 60);
            crc2.lineTo(5, 45);
            crc2.moveTo(10, 60);
            crc2.lineTo(10, 45);
            crc2.moveTo(15, 60);
            crc2.lineTo(15, 45);
            crc2.closePath();
            crc2.stroke();
            crc2.save();
            crc2.restore();
        }

        public drawImpatientCustomer(): void {
            //impatient Customer
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#b0E0E6";
            crc2.arc(0, 120, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(0, 70, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(10, 70, 4, 0, 2 * Math.PI);
            crc2.arc(-10, 70, 4, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.moveTo(-10, 80);
            crc2.lineTo(10, 80);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(-20, 120, 7, 0, 2 * Math.PI);
            crc2.arc(20, 120, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#BC8F8F";
            crc2.arc(-12, 150, 8, 0, 2 * Math.PI);
            crc2.arc(12, 150, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(-15, 60);
            crc2.lineTo(-15, 45);
            crc2.moveTo(-10, 60);
            crc2.lineTo(-10, 45);
            crc2.moveTo(-5, 60);
            crc2.lineTo(-5, 45);
            crc2.moveTo(0, 60);
            crc2.lineTo(0, 45);
            crc2.moveTo(5, 60);
            crc2.lineTo(5, 45);
            crc2.moveTo(10, 60);
            crc2.lineTo(10, 45);
            crc2.moveTo(15, 60);
            crc2.lineTo(15, 45);
            crc2.closePath();
            crc2.stroke();
            crc2.save();
            crc2.restore();

        }

        public drawMadCustomer(): void {
            //mad Customer
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "#b0E0E6";
            crc2.arc(0, 120, 35, 0, 2 * Math.PI);
            crc2.fill();

            //head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(0, 70, 25, -6, 2 * Math.PI);
            crc2.fill();

            //eye
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(10, 70, 4, 0, 2 * Math.PI);
            crc2.arc(-10, 70, 4, 0, 2 * Math.PI);
            crc2.fill();

            //mouth
            crc2.beginPath();
            crc2.arc(0, 90, 10, 0, Math.PI, true);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //arm
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(-20, 120, 7, 0, 2 * Math.PI);
            crc2.arc(20, 120, 7, 0, 2 * Math.PI);
            crc2.fill();

            //feet
            crc2.beginPath();
            crc2.fillStyle = "#BC8F8F";
            crc2.arc(-12, 150, 8, 0, 2 * Math.PI);
            crc2.arc(12, 150, 8, 0, 2 * Math.PI);
            crc2.fill();

            //hair
            crc2.beginPath();
            crc2.moveTo(-15, 60);
            crc2.lineTo(-15, 45);
            crc2.moveTo(-10, 60);
            crc2.lineTo(-10, 45);
            crc2.moveTo(-5, 60);
            crc2.lineTo(-5, 45);
            crc2.moveTo(0, 60);
            crc2.lineTo(0, 45);
            crc2.moveTo(5, 60);
            crc2.lineTo(5, 45);
            crc2.moveTo(10, 60);
            crc2.lineTo(10, 45);
            crc2.moveTo(15, 60);
            crc2.lineTo(15, 45);
            crc2.closePath();
            crc2.stroke();
            crc2.save();
            crc2.restore();
        }

    
        public move(_timeslice: number): void {
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
}
