namespace DönerTrainer_Endabgabe {
    export class DoenerKebap extends Ingredient {
        constructor(_position: Vector) {
            super(_position);
        }
        draw(): void {

            //meat
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "brown";
            crc2.arc(85, -35, 10, 0, 2 * Math.PI);
            crc2.arc(75, -35, 10, 0, 2 * Math.PI);
            crc2.arc(65, -35, 10, 0, 2 * Math.PI);
            crc2.arc(55, -35, 10, 0, 2 * Math.PI);
            crc2.arc(95, -35, 10, 0, 2 * Math.PI);
            crc2.arc(105, -35, 10, 0, 2 * Math.PI);
            crc2.arc(110, -35, 10, 0, 2 * Math.PI);
            crc2.arc(115, -35, 10, 0, 2 * Math.PI);
            crc2.fill();

            //flat bread
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "hsl(34,44%,72%)";
            crc2.arc(85, -30, 40, 0, Math.PI);
            crc2.fill();

            //corn
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "black";
            crc2.arc(50, -25, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(85, -25, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(115, -25, 2, 0, Math.PI);
            crc2.save();
            crc2.fill();

            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "black";
            crc2.arc(55, -15, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(70, -15, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(95, -15, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(110, -15, 2, 0, Math.PI);
            crc2.save();
            crc2.fill();

            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "black";
            crc2.arc(63, -5, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(75, -5, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(88, -5, 2, 0, Math.PI);
            crc2.save();
            crc2.arc(103, -5, 2, 0, Math.PI);
            crc2.save();
            crc2.fill();

            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "black";
            crc2.arc(85, 2, 2, 0, Math.PI);
            crc2.save();
            crc2.closePath();
            crc2.fill();
            crc2.restore();

        }
    }

}